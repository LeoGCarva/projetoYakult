import styles from "./Footer.module.css";
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaLaptopCode,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { LuMail, LuMailOpen } from "react-icons/lu";

export function Footer() {
  return (
    <footer className={styles.footerArea}>

      <div className={styles.links}>

        <div className={styles.contact}>
          <h1>Get in Touch</h1>
          <p>About Us</p>
          <p>Our Services</p>
          <p>Privacy Policy</p>
          <p>FAQ</p>
        </div>

      </div>

      <div className={styles.iconsArea}>
        <h1>Follow Us</h1>
        <div className={styles.icons}>
          <FaWhatsappSquare />
          <FaInstagramSquare />
          <FaSquareXTwitter />
        </div>
      </div>

      <div className={styles.card1}>
        <FaLaptopCode className={styles.card1Img} /> L / G / C
      </div>

    </footer>
  );
}
