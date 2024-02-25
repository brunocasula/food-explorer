import { Container, Form, Logo } from "./styles";
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password })
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      if (email, password.length >= 6) {
        handleSignIn();
      }
    }
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="" />
        <h1>food explorer</h1>
      </Logo>

      <Form>
        <legend>Faça login</legend>

        <div className="input-wapper">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            onChange={e => setEmail(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="input-wapper">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            id="password"
            placeholder="No mínimo 6 caracteres"
            onChange={e => setPassword(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <Button
          title="Entrar"
          onClick={handleSignIn}
          disabled={!email || password.length < 6}
        />

        <Link to="/register" href="#">
          Criar uma conta
        </Link>

      </Form>
    </Container >
  )
}