import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
// import { useNavigate } from "react-router-dom";

const CartContext = createContext({});
// const navigate = useNavigate();

function CartProvider({ children }) {
  const [dataCart, setDataCart] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || []);

  const [orders, setOrders] = useState([]);

  function handleAddDishToCart(data, quantity) {

    try {
      const { id, name, price, image } = data;
      const totalPrice = (quantity * price).toFixed(2);

      const order = { id, name, price, quantity, total_price: totalPrice, image }

      const orderExists = dataCart.some((userOrder) => userOrder.name === order.name);

      if (orderExists) {
        return toast.warn("Esse item já está no carrinho");
      };

      setDataCart(prevState => [...prevState, order])

    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error("Não foi possível adicionar o item ao carrinho")
      }
    }

    toast.info("Item adicionado ao carrinho!");
  }

  function handleRemoveDishFromCart(deleted) {
    setDataCart(prevState => prevState.filter(item => item.id !== deleted));
  }

  const total = dataCart.reduce((value, item) => {
    return value + (item.price * item.quantity);
  }, 0);

  function handleResetCart() {
    localStorage.removeItem(`@foodexplorer:cart`);
    setDataCart([]);
  }

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(dataCart));
  }, [dataCart])

  return (
    <CartContext.Provider value={{
      dataCart,
      handleAddDishToCart,
      handleRemoveDishFromCart,
      total: String(total.toFixed(2)).replace(".", ","),
      setOrders,
      handleResetCart,
    }}>
      {children}
    </ CartContext.Provider>
  )

}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };