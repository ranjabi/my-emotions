import Layout from "./components/Layout/Layout";
import Emotions from "./components/Selection/Emotions";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  /* accessing showCart state */
  const showCart = useSelector(state => state.ui.cartIsVisible);

  return (
    <Layout>
      {showCart && <Cart />}
      <Emotions />
    </Layout>
  );
}

export default App;
