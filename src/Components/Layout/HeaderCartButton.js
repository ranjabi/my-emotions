/*
 * Used to render a button that opens a modal
 * Exported to Header.js
 */

const HeaderCartButton = (props) => {
  return (
    <button onClick={props.onClick}>
      <span>Your Cart</span>
      {/* emotion counter */}
      <span> 4</span>
    </button>
  );
};

export default HeaderCartButton;
