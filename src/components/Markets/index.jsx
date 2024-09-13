import { CiShop } from "react-icons/ci";
import { SlArrowRight } from "react-icons/sl";

import styles from "./Markets.module.css";

export function Markets({ id, name, local, handleStoreName, settedStoreName }) {
  return (
    <div onClick={() => handleStoreName(name)} className={settedStoreName === name ? styles.marketContainerFocus : styles.marketContainer}>
      <div className={styles.store}>

        <div className={styles.storeImg}>
          <CiShop className={styles.img} />
        </div>

        <div className={styles.storeInfo}>
          <h2>{name}</h2>
          <p>
            {local}
          </p>
        </div>

      </div>

      <SlArrowRight />
    </div>
  );
}
