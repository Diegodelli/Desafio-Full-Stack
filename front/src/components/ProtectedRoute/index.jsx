import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ModalLoggedIn } from "../ModalLoggedIn";

const ProtectedRoute = () => {
  const { loading } = useContext(UserContext);

  if (!loading) {
    return (
      <>
        <ModalLoggedIn />
      </>
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
