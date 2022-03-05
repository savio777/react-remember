import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import api from "../../api";
import { Container, Form } from "./styles";
import Button from "../../components/Button";
import { addUser } from "../../store/users/actions";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requestLogin = async (event: any) => {
    event?.preventDefault();

    console.log("email", email);
    console.log("pass", password);

    try {
      const response = await api.get("/user", {
        params: {
          email,
          password,
        },
      });

      if (
        (response.status === 200 || response.status === 201) &&
        response.data.length > 0
      ) {
        dispatch(
          addUser({ email: response.data[0]?.email, id: response.data[0]?.id })
        );

        // navigate("/home");
      } else {
        alert("Erro ao tentar realizar login!");
      }
    } catch (error) {
      console.log(error);
      alert("Erro ao tentar realizar login!");
    }
  };

  return (
    <Container>
      <p>Login</p>

      <Form onSubmit={(event) => requestLogin(event)}>
        <label>E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button>Entrar</Button>
      </Form>
    </Container>
  );
};

export default Login;
