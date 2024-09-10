import { CiShop, CiShoppingBasket, CiMapPin   } from "react-icons/ci";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.container}>
      <button className={styles.shop}>
        <CiShop />
      </button>
      <button className={styles.products}>
        <CiShoppingBasket />
      </button>
      <button className={styles.changes}>
        <CiMapPin />
      </button>
    </div>
  );
}
