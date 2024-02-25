import { Container, Form, Logo } from "./styles";
import logo from "../../assets/logo.svg"
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {

    if (!name || !email || !password) {
      return toast.warn("Preencha todos os campos!");
    }

    await api.post("/users", { name, email, password })
      .then(() => {
        toast.info("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          toast.error(error.response.data.message)
        } else {
          toast.error("Não foi possível cadastrar!")
        }
      });
  }

  function handleKeyPress(event) {
    if (event.key == "Enter") {
      if (name, email, password.length >= 6) {
        handleSignUp();
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
        <legend>Crie sua conta</legend>

        <div className="input-wapper">
          <label htmlFor="name">Seu nome</label>
          <Input
            type="text"
            id="name"
            placeholder="Exemplo: Maria da Silva"
            onChange={e => setName(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

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
          title="Criar conta"
          onClick={handleSignUp}
          disabled={!name || !email || password.length < 6}
        />

        <Link to="/" href="#">
          Já tenho uma conta
        </Link>

      </Form>
    </Container >
  )
}