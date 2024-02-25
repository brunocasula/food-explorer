import { Container, Content, Banner } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import banner from "../../assets/banner.svg";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useFavorite } from "../../hooks/favorite";

export function Home() {
  const [search, setSearch] = useState("");

  const [meals, setMeals] = useState([]);
  const [desserts, setDesserts] = useState([]);
  const [beverages, setBeverages] = useState([]);

  const { fetchFavorites, favorites, updateFavorite } = useFavorite();

  {

    useEffect(() => {
      async function fetchDishes() {
        const response = await api.get(`/dishes?search=${search}`);

        setMeals(response.data.filter(dish => dish.category === "meal"));
        setDesserts(response.data.filter(dish => dish.category === "dessert"));
        setBeverages(response.data.filter(dish => dish.category === "beverage"));
      }

      fetchDishes();

    }, [search]);

    useEffect(() => {
      fetchFavorites();
    }, [])

  }

  return (
    < Container >
      <Header
        setSearch={setSearch}
        search={search}
      />

      <main>
        <Content>

          <Banner>
            <img src={banner} alt="Imagem de ingredientes" />
            <div className="banner">
              <div className="title">
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
              </div>
            </div>
          </Banner>

          {/* REFEIÇÕES */}
          {meals.length > 0 &&
            <Section title="Refeições">

              {
                meals.map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish}
                    isFavorite={favorites.includes(dish.id)}
                    updateFavorite={updateFavorite}
                  />

                ))

              }

            </Section>
          }

          {/* BEBIDAS */}
          {desserts.length > 0 &&
            <Section title="Sobremesas">

              {
                desserts.map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish}
                    isFavorite={favorites.includes(dish.id)}
                    updateFavorite={updateFavorite}
                  />
                ))
              }

            </Section>
          }

          {/* SOBREMESAS */}
          {beverages.length > 0 &&
            <Section title="Bebidas">

              {
                beverages.map(dish => (
                  <Card
                    key={String(dish.id)}
                    data={dish}
                    isFavorite={favorites.includes(dish.id)}
                    updateFavorite={updateFavorite}
                  />
                ))
              }

            </Section>
          }

        </Content>
        <Footer />

      </main >
    </Container >

  );
}