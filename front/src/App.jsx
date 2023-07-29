import UserProvider from "./contexts/UserContext";
import RoutesMain from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <UserProvider>
        <GlobalStyle />
        <RoutesMain />
      </UserProvider>
    </>
  );
};

export default App;
