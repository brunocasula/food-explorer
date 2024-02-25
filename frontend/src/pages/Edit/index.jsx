import { Container, Content, ButtonBack, Form } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { TextArea } from "../../components/TextArea";
import { Input } from "../../components/Input";
import { Ingredient } from "../../components/Ingredient";
import { IngredientItem } from "../../components/IngredientItem";
import { Link } from "react-router-dom";
import { FiUpload, FiChevronLeft } from 'react-icons/fi';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { toast } from 'react-toastify';

export function Edit() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const [dish, setDish] = useState(null);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0.00);
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setnewIngredient] = useState("");

  const formData = new FormData();
  formData.append("image", image);
  formData.append("name", name);
  formData.append("category", category);
  formData.append("price", price);
  formData.append("description", description);
  formData.append("ingredients", JSON.stringify(ingredients));

  useEffect(() => {
    async function fetchDish() {
      try {
        const response = await api.get(`/dishes/${params.id}`);
        setDish(response.data);

        setIngredients(ingredients.map(ingredient => ingredient.name));

      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível visualizar o prato!");
        }
      }

    }

    fetchDish();
  }, [params.id]);

  useEffect(() => {
    if (dish) {
      setImage(dish.image);
      setName(dish.name);
      setCategory(dish.category);
      setPrice(dish.price);
      setDescription(dish.description);
      setIngredients(dish.ingredients.map(ingredient => ingredient.name));

    }
  }, [dish])


  function handleAddIngredient() {

    if (!newIngredient.trim()) {
      toast.info("Por favor informe o ingrediente!");

      return
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    setnewIngredient("");
  }

  function handleIngredientKeyPress(event) {
    if (event.key == "Enter") {
      handleAddIngredient();
    }
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleUpdateDish() {
    const notANumber = isNaN(price) || price === ''

    if (!name || price < 0 || notANumber) {
      return
    }

    if (newIngredient !== '') {
      return toast.warn(
        `Clique no + para adicionar o ingrediente tag: ${newIngredient}. ou limpe o campo!`,
      )
    }

    if (ingredients.length === 0) {
      return toast.warn('Informe ao menos o ingrediente principal do prato!')
    }

    setLoading(true);

    try {
      await api.put(`/dishes/${params.id}`, formData);
      toast.info("Prato atualizado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o prato.");
      }
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteDish() {
    const confirm = window.confirm("Deseja realmente remover o prato?");

    if (confirm) {
      setLoading(true);

      try {
        await api.delete(`/dishes/${params.id}`);
        navigate("/");
      } catch (error) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Não foi possível excluir o prato.");
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonBack>
            <Link to="/"> <FiChevronLeft />voltar</Link>
          </ButtonBack>

          <Form>
            <fieldset>
              <legend>Editar prato</legend>

              <div className="input-line">

                <div className="input-wrapper input-file">
                  <label htmlFor="image">Imagem do prato</label>

                  <label className="label-file" htmlFor="image">
                    <FiUpload />
                    <span>Selecione a imagem</span>
                    <input
                      type="file"
                      id="image"
                      onChange={e => setImage(e.target.files[0] ? e.target.files[0] : null)}
                    />
                  </label>

                </div>

                <div className="input-wrapper flex-content">
                  <label htmlFor="name">Nome</label>
                  <Input
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Ex: Salada Ceasar"
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                <div className="input-wrapper flex-auto">
                  <label htmlFor="category">Categoria</label>

                  <div className="select-dropdown">
                    <select
                      id="category"
                      name="category"
                      defaultValue={category}
                      onChange={e => setCategory(e.target.value)}
                    >
                      <option value="DEFAULT" disabled>Selecionar</option>
                      <option value="meal">Refeição</option>
                      <option value="dessert">Sobremesas</option>
                      <option value="beverage">Bebidas</option>
                    </select>
                  </div>

                </div>

              </div>

              <div className="input-line">
                <div className="input-wrapper flex-content">

                  <label htmlFor="ingredient">Ingredientes</label>
                  <Ingredient >
                    {
                      ingredients.map((ingredient, index) => (
                        < IngredientItem
                          key={String(index)}
                          value={ingredient}
                          onClick={() => handleRemoveIngredient(ingredient)}
                        />
                      ))
                    }
                    <IngredientItem
                      $isnew="true"
                      placeholder="Adicionar"
                      onChange={e => setnewIngredient(e.target.value)}
                      value={newIngredient}
                      onClick={handleAddIngredient}
                      onKeyPress={handleIngredientKeyPress}
                    />
                  </Ingredient>
                </div>

                <div className="input-wrapper price">
                  <label htmlFor="price">Preço</label>
                  <Input
                    type="number"
                    id="price"
                    value={price}
                    placeholder="R$ 00,00"
                    onChange={e => setPrice(e.target.value)}
                  />
                </div>

              </div>

              <div className="input-line">

                <div className="input-wrapper">
                  <label htmlFor="description">Descrição</label>
                  <TextArea
                    name="description"
                    id="description"
                    defaultValue={description}
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

              </div>

              <div className="input-line ">
                <div className="button-wrapper">
                  <Button
                    title="Excluir prato"
                    onClick={handleDeleteDish}
                    loading={loading}
                  />
                  <Button
                    title="Salvar alterações"
                    onClick={handleUpdateDish}
                    loading={loading}
                  />
                </div>
              </div>


            </fieldset>
          </Form>


        </Content>
      </main>

      <Footer />
    </Container>
  );
}