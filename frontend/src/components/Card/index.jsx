import { Container } from "./styles";
import dishNoImage from "../../assets/dish_no_image.svg";
import { Button } from "../Button";
import { NumberPicker } from "../../components/NumberPicker";
import edit from "../../assets/edit.svg";
import iconFavorite from "../../assets/favotire.svg";
import iconFavoriteFill from "../../assets/favotireFill.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { toast } from "react-toastify";

export function Card({ data, isFavorite, updateFavorite, ...rest }) {

  const navigate = useNavigate();

  const { user } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  const { handleAddDishToCart } = useCart();

  const [favorite, setFavorite] = useState(isFavorite);
  const [quantity, setQuantity] = useState(1);

  function handleFavorite() {
    setFavorite(!favorite);

    try {
      if (favorite) {
        updateFavorite(true, data.id);
      } else {
        updateFavorite(false, data.id);
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar os favoritos!");
      }
    }
  }

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }


  return (
    <Container
      {...rest}
    >

      {
        isAdmin
          ?
          <button
            onClick={handleEdit}
          >
            <img src={edit} alt="Editar" />
          </button>
          :
          <button
            onClick={handleFavorite}
          >
            <img src={favorite ? iconFavoriteFill : iconFavorite} alt="heart" />
          </button>

      }

      <img src={data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishNoImage}
        alt="Imagem do prato."
      />

      <Link to={`/detail/${data.id}`}>
        <h3>{`${data.name.substring(0, 16)} >`}</h3>
      </Link>

      <p>{`${data.description.substring(0, 58)}`}</p>

      <strong>R$ {data.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</strong>

      {
        !isAdmin
        &&
        <div>
          <NumberPicker
            quantity={quantity}
            setQuantity={setQuantity}
          />
          <Button
            title="Incluir"
            onClick={() => handleAddDishToCart(data, quantity)}
          />
        </div>
      }

    </Container>
  )
}