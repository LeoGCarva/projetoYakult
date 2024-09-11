import styles from "./Footer.module.css";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaLaptopCode,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuMail, LuMailOpen } from "react-icons/lu";

export function Footer() {
  return (
    <footer className={styles.footerArea}>
      <div className={styles.contact}>
        <h1>Get in Touch</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          itaque facere reiciendis accusantium.
        </p>
        <div className={styles.icons}>
          <FaWhatsappSquare />
          <FaInstagramSquare />
          <FaSquareXTwitter />
        </div>
      </div>

      <div className={styles.card1}>
        <FaLaptopCode className={styles.card1Img}/> L & G
      </div>
    </footer>
  );
}
