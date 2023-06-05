import { AppRouter } from "../app.router/app.router";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
