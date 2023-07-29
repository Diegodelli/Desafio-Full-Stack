import ButtonForm from "../../components/ButtonForm";
import { Container } from "./styles";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "../../styles/text.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const schema = z.object({
    email: z
      .string()
      .nonempty("E-mail é obrigatória")
      .email("Deve ser um e-mail válido"),
    password: z.string().nonempty("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { onSubmit } = useContext(UserContext);

  return (
    <>
      <ToastContainer />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="titleForm">Login</h3>
          <label className="textLabel" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <p className="alertInput">{errors.email?.message}</p>

          <label className="textLabel" htmlFor="password">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <p className="alertInput">{errors.password?.message}</p>

          <ButtonForm type="submit">Entrar</ButtonForm>

          <span className="spanForm">Ainda não possui uma conta?</span>

          <Link className="link" to={"/register"}>
            Cadastre-se
          </Link>
        </form>
      </Container>
    </>
  );
};

export default Login;
