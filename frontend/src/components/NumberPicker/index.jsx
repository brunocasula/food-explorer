import { Container } from "./styles";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useState } from "react";

export function NumberPicker({ quantity, setQuantity, ...rest }) {

  function handleAddQuantity() {
    if (quantity < 99) {
      setQuantity(quantity + 1);
    }
  }

  function handleRemoveQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <Container>
      <button onClick={handleRemoveQuantity}><FiMinus /></button>
      <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
      <button onClick={handleAddQuantity}><FiPlus /></button>
    </Container>
  );
}