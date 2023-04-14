import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import addedToCartImg from '@icons/bt_added_to_cart.svg';
import logo from '@logos/favicon_yard_sale.svg';
import styles from '@styles/ProductItem.module.scss';

function ProductItem({ product }) {
  const { addToCart, state } = useContext(AppContext)

  const handleClick = item => {
    addToCart(item);
  }

  return (
    <div className={styles["ProductItem"]}>
      <Image
        src={product.images[1] || logo}
        alt={product.title}
        className={styles["product-img"]}
      />
      <div className={styles["product-info"]}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} >
          <Image
            src={
              state.cart.includes(product)
                ? addedToCartImg
                : addToCartImg
            }
            alt="Add To card"
          />
        </figure>
      </div>
    </div>
  );
}
export default ProductItem;