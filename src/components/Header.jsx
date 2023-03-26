import '../scss/components/Header.scss';
import { Link } from 'react-router-dom';
import Search from './Search';
import cart from '../assets/images/cart.svg';
import logo from '../assets/images/logo.png';
function Header() {
  return (
    <div className="header">
      <div className="conteiner">
        <Link to="/">
          <div className="header-logo">
            <img src={logo} alt="" width="48" />
            <div className="header-logo-text">
              <h1>TECHNOMAX</h1>
              <p>Online store</p>
            </div>
          </div>
        </Link>
        <Search />
        <div className="header-cart">
          <Link to="cart" className="button button-cart">
            <span className="cart-price">520 $</span>
            <div className="button__delimiter">
              <img src={cart} alt="" width={35} />
            </div>
            <span className="cart-items-number">3</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
