import styles from "./Header.module.css";
import logo from '../../../assets/yakult-123.svg'


export function Header() {
  return (
    <header className={styles.pageHeader}>
      <img src={logo} alt="" />
    </header>
  );
}
