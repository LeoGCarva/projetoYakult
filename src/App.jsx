import { Header } from "./components/Header";
// import { Navbar } from "./components/Navbar";
// import { Markets } from './components/Markets';
import { Products } from "./components/Products";
import { Footer } from "./components/Footer";
import styles from "./App.module.css";
import { CiShop, CiShoppingBasket, CiMapPin } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

export function App() {

  return (
    <div>
      <Header />
{/* --------------------------------------------------------- */}
      <div className={styles.bodyApp}>
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
{/* --------------------------------------------------------- */}
        <div className={styles.content}>
          <Products />
        </div>
      </div>
{/* --------------------------------------------------------- */}
      <Footer />
    </div>
  );
}
