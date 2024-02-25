import { Container, Content, Logo } from "./styles";
import logo from "../../assets/logo_gray.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <Logo>
            <img src={logo} alt="" />
            <h1>food explorer</h1>
          </Logo>
        </Link>
        <p>
          © 2024 - Todos os direitos reservados.
        </p>

      </Content>
    </Container>
  );
}