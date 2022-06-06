import Layout from "./components/Layout/Layout";
import Emotions from "./components/Selection/Emotions";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Layout>
      <Cart />
      <Emotions />
    </Layout>
  );
}

export default App;
