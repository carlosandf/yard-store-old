import React, { useContext } from 'react';
import Image from 'next/image';
import iconClose from '@icons/icon_close.png';
import AppContext from '@context/AppContext';
import styles from '@styles/OrderItem.module.scss';

function OrderItem({ product }) {
  const { removeFromCart } = useContext(AppContext);

  return (
    <div className={styles.OrderItem}>
      <figure>
        <Image src={product.images[1]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <Image className={styles['OrderItem-btn-delete']} onClick={() => removeFromCart(product)} src={iconClose} alt="close" />
    </div>
  );
}
export default OrderItem;