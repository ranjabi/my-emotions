import { useState, Fragment } from "react";
import Cart from "./Components/Cart/Cart";
import Emotions from "./Components/Emotions/Emotions";
import Header from "./Components/Layout/Header";

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <Fragment>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Emotions />
      </main>
    </Fragment>
  );
};

export default App;
