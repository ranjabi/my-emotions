import Layout from "./components/Layout/Layout";
import Emotions from "./components/Selection/Emotions";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Pages/Contact";
import How from "./components/Pages/How";

function App() {
  /* accessing showCart state */
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Router>
      <Layout>
        {showCart && <Cart />}
        <Emotions />
      </Layout>
    </Router>
  );
}

export default App;
