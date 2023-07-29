import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../service/api";
import { toast } from "react-toastify";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("@next:token");

    if (!token) {
      setLoading(false);

      return;
    }

    api.defaults.headers.authorization = `Bearer ${token}`;

    setLoading(true);
  });

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

      navigate("/home", { replace: true });
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
      const res = await api.post("/users", data);

      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      navigate("/", { replace: true });
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
        user,
        setUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
