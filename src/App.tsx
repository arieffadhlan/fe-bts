import AppRouter from "./routes";
import AppProvider from "./components/AppProvider";

const App = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
