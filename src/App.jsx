import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.bodyApp}>
        <Navbar />
      </div>
    </div>
  )
}
