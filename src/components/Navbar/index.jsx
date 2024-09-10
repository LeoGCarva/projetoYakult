import { CiShop, CiShoppingBasket, CiMapPin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={styles.container}>
      <button className={styles.shop}>
        <CiShop />
      </button>
      <BsArrowRight />
      <button className={styles.products}>
        <CiShoppingBasket />
      </button>
      <BsArrowRight />
      <button className={styles.changes}>
        <CiMapPin />
      </button>
    </div>
  );
}
