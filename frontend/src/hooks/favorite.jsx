import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [data, setData] = useState({});
  const [favorites, setFavorites] = useState([]);

  // useEffect(() => {
  //   fetchFavorites();
  // }, []);


  async function fetchFavorites() {
    try {
      const response = await api.get("/favorites");
      // const data = JSON.parse(response.data);
      const data = response.data;
      const favorites = data.map((favorite) => favorite.dish_id);

      setData(data);
      setFavorites(favorites);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível carregar os favoritos!");
      }
    }
  };


  // const updateFavorite = async (isFavorite, dishId) => {
  async function updateFavorite(isFavorite, dishId) {
    try {
      if (isFavorite) {
        await api.delete(`/favorites/${dishId}`);

        setData((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite.dish_id !== dishId)
        );

        setFavorites((prevFavorites) =>
          prevFavorites.filter((favorite) => favorite !== dishId)
        );
      } else {
        const response = await api.post('/favorites', { dish_id: dishId });

        setData((prevData) => [...prevData, response.data]);
        setFavorites((prevFavorites) => [...prevFavorites, dishId]);

      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar os favoritos!");
      }
    }
  };

  return (
    <FavoriteContext.Provider value={{
      data: data,
      favorites: favorites,
      fetchFavorites,
      updateFavorite
    }}>
      {children}
    </FavoriteContext.Provider>
  )

}

function useFavorite() {
  const context = useContext(FavoriteContext);
  return context;
}

export { FavoriteProvider, useFavorite };