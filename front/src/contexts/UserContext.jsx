import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("@next:token");

      if (!token) {
        setLoading(false);

        return;
      }

      api.defaults.headers.authorization = `Bearer ${token}`;
      setLoading(true);

      try {
        const res = await api.get("/users/");
        const userData = res.data;

        setUser(userData);
        setLoading(true);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(true);
      }
    };

    fetchUser();
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await api.post("/login", data);

      const { token } = res.data;

      toast.success("Login realizado com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      api.defaults.headers.authorization = `Bearer ${token}`;

      localStorage.setItem("@next:token", token);

      setTimeout(() => {
        navigate("/home", { replace: true });
      }, 2000);
    } catch (err) {
      toast.error("Ops, algo deu errado!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log(err);
    } finally {
      setLoading(true);
    }
  };

  const onSubmitRegister = async (data) => {
    try {
      await api.post("/users", data);

      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    } catch (err) {
      toast.error("Ops! algo deu errado.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  };

  const submitEditUser = async (data) => {
    try {
      if (data.name === "") {
        delete data.name;
      }
      if (data.email === "") {
        delete data.email;
      }
      if (data.password === "") {
        delete data.password;
      }

      const res = await api.patch("/users/", data);
      const userData = res.data;

      toast.success("Edição efetuada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setUser(userData);
      setEditLoading(true);
      setModal(false);
    } catch (err) {
      toast.error("Ops! algo deu errado.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err);
    }
  };

  return (
    <UserContext.Provider
      value={{
        onSubmit,
        onSubmitRegister,
        submitEditUser,
        user,
        setUser,
        loading,
        setLoading,
        modal,
        setModal,
        editLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
