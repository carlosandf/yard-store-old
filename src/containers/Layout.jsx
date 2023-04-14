import React from "react";
import Header from '@components/Header';
import styles from '@styles/Layout.module.scss';

function Layout({children}) {
  return (
    <div className={styles.Layout}>
      <Header />
      <div className={styles["Layout-contain"]}>
        {children}
      </div>
    </div>
  );
}
export default Layout;