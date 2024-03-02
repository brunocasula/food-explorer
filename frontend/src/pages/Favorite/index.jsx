import { Container, Content, FavoriteDish } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import dishNoImage from "../../assets/dish_no_image.svg";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { api } from "../../services/api";
import { useFavorite } from "../../hooks/favorite";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";

export function Favorite() {

  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = [USER_ROLE.ADMIN].includes(user.role);

  const { fetchFavorites, data, updateFavorite, loading } = useFavorite();

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Content>

          {console.log(loading)}
          {
            loading === true ?
              <div className="loading">
                <Loading />
              </div>

              :

              data.length === 0 ?
                <div className="data-empty">
                  <h2>Você ainda não possui nenhum item como favorito!</h2>
                </div>
                :
                <>
                  <h1>Meus Favoritos</h1>
                  <section>

                    {
                      data.map((favorite, index) => (

                        <FavoriteDish
                          key={String(index)}
                        >
                          <img src={favorite.image ? `${api.defaults.baseURL}/files/${favorite.image}` : dishNoImage}
                            alt="Imagem do prato." />
                          <section>
                            <h3>{`${favorite.name.substring(0, 13)}`}</h3>
                            <button
                              onClick={() => updateFavorite(true, favorite.dish_id)}>
                              Remover dos Favoritos
                            </button>
                          </section>
                        </FavoriteDish>

                      ))
                    }

                  </section>
                </>

          }

        </Content>
      </main>

      <Footer />
    </Container >
  );

}