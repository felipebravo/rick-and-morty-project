import { GlobalStyle } from "./styles";
import { ApiProvider } from "./contexts/index";
import { MainRoutes } from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ApiProvider>
        <MainRoutes />
      </ApiProvider>
    </>
  );
};

export default App;
