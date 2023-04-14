import React from 'react';
import useGetData from '@hooks/useGetData';
import ProductItem from '@components/ProductItem';
import styles from '@styles/ProductList.module.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = useGetData(API);

	return (
		<section className={styles["main-container"]}>
			<div className={styles.ProductList}>
				{products.map(product => (
					<ProductItem product={product} 	key={product.id} />
				))}
			</div>
		</section>
	);
}
export default ProductList;