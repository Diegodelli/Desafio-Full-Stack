import { Link } from "react-router-dom";
import "../../styles/text.css";
import ContainerHome from "./styles";
import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";
import { MdOutlineAdd } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
//import { Modal } from "../../components/Modal";
import { ToastContainer } from "react-toastify";
import api from "../../service/api";

const Home = () => {
  const { user, setUser, loading } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const res = await api.get("users/");

      setUser(res.data);
    })();
  }, []);

  const clean = () => {
    localStorage.clear();
    setUser(null);
  };

  /*  const openModal = () => {
    setModalContact(true);
  }; */

  return (
    <>
      <ToastContainer />
      <ContainerHome>
        <header>
          <div>
            <button className="buttonEdit">Editar Perfil</button>
            <Link to={"/"} className="buttonClose" onClick={() => clean()}>
              Sair
            </Link>
          </div>
        </header>
        <section>
          <div>
            {!loading && <Loading />}
            <h3 className="titleForm">Diego Delli Colli Ramos</h3>
            <p className="textLabel">dellicolli89@gmail.com</p>
          </div>
        </section>
        <div className="techAddDiv">
          <h3 className="titleForm">Produtos</h3>
        </div>
      </ContainerHome>
    </>
  );
};

export default Home;
