import { ContainerModal } from "./styles";
import BtnForm from "../ButtonForm";
import "../../styles/text.css";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import useOutClick from "../../hooks/useOutClick";
import { createPortal } from "react-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../Loading";

export const Modal = () => {
  const refModal = useOutClick(() => {
    setModal(false);
  });

  const { setModal, submitEditUser, editLoading } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const closeModal = () => {
    setModal(false);
  };

  return createPortal(
    <>
      <ToastContainer />
      <ContainerModal>
        {!editLoading && <Loading />}
        <div className="contentModal" ref={refModal}>
          <div className="headerModal">
            <h4 className="titleModal">Editar Perfil</h4>
            <button
              className="closeModal"
              type="button"
              onClick={() => closeModal()}
            >
              x
            </button>
          </div>
          <form onSubmit={handleSubmit(submitEditUser)}>
            <label className="textLabel" htmlFor="name">
              Nome
            </label>
            <input
              type="text"
              id="name"
              placeholder="Editar nome"
              {...register("name")}
            />

            <label className="textLabel" htmlFor="email">
              E-mail
            </label>

            <input
              type="text"
              id="email"
              placeholder="Editar e-mail"
              {...register("email")}
            />

            <label className="textLabel" htmlFor="password">
              Senha
            </label>

            <input
              type="password"
              id="password"
              placeholder="Editar senha"
              {...register("password")}
            />

            <BtnForm type="submit">Confirmar</BtnForm>
          </form>
        </div>
      </ContainerModal>
    </>,
    document.body
  );
};
