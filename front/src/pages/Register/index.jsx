import ButtonForm from "../../components/ButtonForm";
import { ContainerRegister } from "./styles";
import "../../styles/text.css";
import { z } from "zod";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const schema = z.object({
    name: z.string().nonempty("Nome é obrigatório"),
    email: z
      .string()
      .nonempty("E-mail é obrigatória")
      .email("Deve ser um email válido!"),
    password: z.string().nonempty("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const { onSubmitRegister } = useContext(UserContext);

  return (
    <>
      <ToastContainer />
      <ContainerRegister>
        <form onSubmit={handleSubmit(onSubmitRegister)}>
          <Link className="buttonBack" to={"/"}>
            Voltar
          </Link>
          <h3 className="titleForm">Register</h3>

          <label className="textLabel" htmlFor="name">
            Nome Completo
          </label>
          <input
            type="text"
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <p className="alertInput">{errors.name?.message}</p>

          <label className="textLabel" htmlFor="email">
            E-mail
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
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <p className="alertInput">{errors.password?.message}</p>

          <ButtonForm type="submit">Cadastrar</ButtonForm>
        </form>
      </ContainerRegister>
    </>
  );
};

export default Register;
