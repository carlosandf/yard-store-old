import React, { useContext } from 'react';
import Image from 'next/image';
import OrderItem from '@components/OrderItem';
import arrow from '@icons/flechita.svg';
import AppContext from '@context/AppContext';
import styles from '@styles/MyOrder.module.scss';

function MyOrder() {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    return state.cart.reduce((accum, current) => (
      accum + current.price
    ), 0);
  }
  return (
    <aside className={styles.MyOrder}>
      <div className={styles["title-container"]}>
        <Image src={arrow} alt="arrow" />
        <p className={styles["title"]}>My Order</p>
      </div>
      <div className="">
        <div className={styles["MyOrder-content"]}>
          {state.cart.map(product => (
            <OrderItem key={`orderItem-${product.id}`} product={product} />
          ))}
        </div>
        <div className={styles["order"]}>
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal()}</p>
        </div>
        <button className={styles["primary-button"]}>
          Checkout
        </button>
      </div>
    </aside>
  );
}
export default MyOrder;