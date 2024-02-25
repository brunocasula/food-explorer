import { Container, Content, ButtonBack, DishDetail, Ingredients, Info } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { Tag } from "../../components/Tag";
import { NumberPicker } from "../../components/NumberPicker";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiChevronLeft } from 'react-icons/fi';
import dishNoImage from "../../assets/dish_no_image.svg";
import { useAuth } from "../../hooks/auth";
import { useCart } from "../../hooks/cart";
import { USER_ROLE } from "../../utils/roles";

import { useState, useEffect } from "react";
import { api } from "../../services/api";

export function Detail() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);
  const [quantity, setQuantity] = useState(1);

  const { handleAddDishToCart } = useCart();

  const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    }

    fetchDish();
  }, []);

  function handleEdit() {
    navigate(`/edit/${data.id}`);
  }

  return (
    <Container>
      <Header />

      {data &&
        <main>
          <Content>
            <ButtonBack>
              <Link to="/"> <FiChevronLeft />voltar</Link>
            </ButtonBack>

            <DishDetail>
              <img src={data.image ? `${api.defaults.baseURL}/files/${data.image}` : dishNoImage}
                alt=""
              />

              <section>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <Ingredients>
                  {
                    data.ingredients.map(ingredient => (
                      <Tag
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))
                  }
                </Ingredients>

                <Info>
                  {
                    isAdmin
                      ?
                      <div>
                        <Button
                          title="Editar prato"
                          onClick={handleEdit}
                        />
                      </div>
                      :
                      <div>
                        <NumberPicker
                          quantity={quantity}
                          setQuantity={setQuantity}
                        />
                        <Button
                          title={`Incluir R$ ${data.price}`}
                          onClick={() => handleAddDishToCart(data, quantity)}
                        />
                      </div>
                  }

                </Info>

              </section>
            </DishDetail>

          </Content>

        </main>
      }

      <Footer />
    </Container>
  );
}