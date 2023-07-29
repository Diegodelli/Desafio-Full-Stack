import { Link } from "react-router-dom";
import "../../styles/text.css";
import ContainerHome from "./styles";
import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import { UserContext } from "../../contexts/UserContext";
import { Modal } from "../../components/Modal/index";
import { ToastContainer } from "react-toastify";
import api from "../../service/api";
import products from "../../products/produts.mock";

const Home = () => {
  const { modal, setModal, user, setUser, loading } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const res = await api.get("/users/");

      setUser(res.data);
    })();
  }, []);

  const clean = () => {
    localStorage.clear();
    setUser(null);
  };

  const openModalEdit = () => {
    setModal(true);
  };

  return (
    <>
      {modal ? <Modal /> : modal}
      <ToastContainer />
      <ContainerHome>
        <header>
          <div>
            <button className="buttonEdit" onClick={() => openModalEdit()}>
              Editar Perfil
            </button>
            <Link to={"/"} className="buttonClose" onClick={() => clean()}>
              Sair
            </Link>
          </div>
        </header>
        <section>
          <div>
            {!loading && <Loading />}
            <h3 className="titleForm">{user?.name}</h3>
            <p className="textLabel">{user?.email}</p>
          </div>
        </section>
        <div>
          <h3 className="titleForm">Produtos</h3>
        </div>
        <div className="sectionProduct">
          <ul className="listProducts">
            {products.map((element) => (
              <li key={element.id}>
                <figure>
                  <img src={element.image} alt={element.name} />
                </figure>
                <div className="divContent">
                  <h3>{element.name}</h3>
                  <p>{element.description}</p>
                  <div>
                    <p className="price">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(Number(element.price))}
                    </p>
                    <p className="brand">{element.brand}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContainerHome>
    </>
  );
};

export default Home;
