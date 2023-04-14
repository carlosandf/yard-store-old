import React from 'react';
import Image from 'next/image';
import arrow from '@icons/flechita.svg';
import styles from '@styles/Order.module.scss';

function Order() {
  return (
    <div className={styles["Order"]}>
      <p>
        <span>10.31.21</span>
        <span>6 articles</span>
      </p>
      <p>$560,00</p>
      <Image src={arrow} alt="arrow" />
    </div>
  );
}
export default Order;