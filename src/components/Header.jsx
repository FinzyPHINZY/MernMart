import { NavLink } from "react-router-dom";
import "./Header.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      <NavLink to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </NavLink>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <MagnifyingGlassIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <NavLink to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </NavLink>
        <NavLink to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </NavLink>
        <NavLink to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </NavLink>
      </div>

      <NavLink to="/checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingCartIcon className="header__basket" />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </NavLink>
    </nav>
  );
};

export default Header;
