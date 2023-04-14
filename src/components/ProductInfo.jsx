import React from 'react';
import Image from 'next/image';
import icon from '@icons/bt_add_to_cart.svg';
import styles from '@styles/ProductInfo.module.scss';

function ProductInfo() {
  return (
    <>
      <Image src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?cs=srgb&dl=pexels-pixabay-276517.jpg&fm=jpg" alt="Bike" />
      <div className={styles["productInfo"]}>
        <p>$ 35,00</p>
        <p>Bike</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button className={`${styles["primary-button"]} ${styles["add-to-cart-button"]}`}>
          <Image src={icon} alt="add to cart" />
          Add to cart
        </button>
      </div>
    </>
  )
}
export default ProductInfo;