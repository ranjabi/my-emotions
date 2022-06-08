import style from './MainHeader.module.css';
import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header className={style.header} >
      <h1>My Emotions</h1>
      <nav>
        <ul style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
          <li>
            <CartButton />
          </li>
          <li className={style.page}>How This Works?</li>
          <li className={style.page}>About</li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;