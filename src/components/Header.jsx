import React, { useState, useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import logo from '@logos/logo_yard_sale.svg';
import iconShoppingCart from '@icons/icon_shopping_cart.svg';
import iconMenu from '@icons/icon_menu.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import styles from '@styles/Header.module.scss';

const initialState = {
  toggleMenu: false,
  toggleOrders: false
}
function Header() {
  const [toggle, setToggle] = useState(initialState);

  const { state } = useContext(AppContext);

  const handleToggleMenu = () => {
    setToggle({
      toggleOrders: false,
      toggleMenu: !toggle.toggleMenu
    });
  }

  const handleToggleOrders = () => {
    setToggle({
        toggleMenu: false,
        toggleOrders: !toggle.toggleOrders
    });
  }

  return (
    <nav className={styles.Nav}>
      <div className={styles["menu"]}>
        <figure>
          <Image src={iconMenu} alt="menu" className={styles["menu-img"]} />
        </figure>
      </div>
      <div className={styles["navbar-left"]}>
        <Image src={logo} alt="logo" className={styles["nav-logo"]} />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className={styles["navbar-right"]}>
        <ul>
          <li className={styles["navbar-email"]} onClick={handleToggleMenu}>
            carlos@example.com
          </li>
          <li className={styles["navbar-shopping-cart"]} onClick={handleToggleOrders}>
            <Image src={iconShoppingCart} alt="shopping cart" />
            {state.cart.length > 0 && (
              <div>{state.cart.length}</div>
            )}
          </li>
        </ul>
      </div>
      {toggle.toggleMenu && <Menu />}
      {toggle.toggleOrders && <MyOrder />}
    </nav>
  );
}
export default Header;