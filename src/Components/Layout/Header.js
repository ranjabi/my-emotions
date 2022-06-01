import HeaderCartButton from "./HeaderCartButton";

/*
 * Use props.onShowCart from App.js to show the cart modal when clicked
 */

const Header = (props) => {
  return (
    <header>
      <h1>My-Emotions from Header</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
};

export default Header;
