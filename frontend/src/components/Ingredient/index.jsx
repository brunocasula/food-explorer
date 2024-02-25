import { Container } from "./styles";

export function Ingredient({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  );
}