import style from './MainHeader.module.css';
import CartButton from '../Cart/CartButton';

const MainHeader = (props) => {
  return (
    <header className={style.header}>
      <h1>My Emotions</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainHeader;