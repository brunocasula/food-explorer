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
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function New() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

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

  function handleAddIngredient() {

    if (!newIngredient.trim()) {
      toast.info("Por favor informe o ingrediente!");

      return
    }
    setIngredients(prevState => [...prevState, newIngredient]);
    setnewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish() {

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
      await api.post("/dishes", formData);
      toast.info("Prato cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível cadastrar o prato.");
      }
    } finally {
      setLoading(false);
    }

  }

  function handleIngredientKeyPress(event) {
    if (event.key == "Enter") {
      handleAddIngredient();
    }
  }

  return (
    < Container >

      <Header />

      <main>
        <Content>

          <ButtonBack>
            <Link to="/"> <FiChevronLeft />voltar</Link>
          </ButtonBack>

          <Form>
            <fieldset>
              <legend>Adicionar prato</legend>

              <div className="input-line">

                {/* INPUT FILE */}
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

                {/* INPUT TEXT */}
                <div className="input-wrapper flex-content">
                  <label htmlFor="name">Nome</label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Ex: Salada Ceasar"
                    onChange={e => setName(e.target.value)}
                  />
                </div>

                {/* SELECT */}
                <div className="input-wrapper flex-auto">
                  <label htmlFor="category">Categoria</label>

                  <div className="select-dropdown">
                    <select
                      id="category"
                      name="category"
                      defaultValue={'DEFAULT'}
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
                        <IngredientItem
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
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    onChange={e => setDescription(e.target.value)}
                  />
                </div>

              </div>

              <div className="input-line button-wrapper">
                <Button
                  title="Salvar alterações"
                  onClick={handleNewDish}
                  loading={loading}
                >
                </Button>
              </div>
            </fieldset>
          </Form>
        </Content>
      </main>

      <Footer />
    </Container>
  );
}