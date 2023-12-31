import { Link } from "react-router-dom";
import { ContainerModalLoggedIn } from "./styles";
import { createPortal } from "react-dom";

export const ModalLoggedIn = () => {
  return createPortal(
    <ContainerModalLoggedIn>
      <div className="contentModal">
        <div className="headerModal">
          <h4>Você não está logado!</h4>
        </div>

        <Link className="link" to={"/"}>
          Fazer o login!
        </Link>
      </div>
    </ContainerModalLoggedIn>,
    document.body
  );
};
