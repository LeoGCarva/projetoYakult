import { CiShop } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";

import styles from "./Markets.module.css";

export function Markets() {
  return (
    <div className={styles.marketContainer}>
      <div className={styles.store}>

        <div className={styles.storeImg}>
          <CiShop className={styles.img} />
        </div>

        <div className={styles.storeInfo}>
          <h2>Nome da loja</h2>
          <p>
            Lorem ipsum dolor sit
          </p>
        </div>

      </div>

      <SlArrowRight />
    </div>
  );
}
