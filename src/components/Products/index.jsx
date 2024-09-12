import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./Products.module.css";

export function Products() {
  return (
    <div className={styles.productContainer}>
      <div className={styles.productImg}>
        <img src="../../../assets/yakult.png" alt="" />
      </div>
      <div className={styles.productContent}>
        <button
          className={styles.arrowProduct}
          onClick={() => document.querySelector(".input")}
        >
          <IoIosArrowBack />
        </button>
        <input type="number" className="input"/>
        <button className={styles.arrowProduct}>
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
