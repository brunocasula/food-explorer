import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

const FavoriteContext = createContext();

function FavoriteProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  async function fetchFavorites() {
    setLoading(true);
    try {
      const response = await api.get("/favorites");
      // const data = JSON.parse(response.data);
      const data = response.data;
      console.log(data);
      console.log(typeof (data));
      const favorites = data.map((favorite) => favorite.dish_id);

      setData(data);
      setFavorites(favorites);
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível carregar os favoritos!");
      }
    } finally {
      setLoading(false);
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
      data,
      favorites: favorites,
      loading,
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