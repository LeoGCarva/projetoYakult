import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Markets } from './components/Markets';
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.bodyApp}>
        <Navbar />

        <div className={styles.content}>
          <Markets />
          <Markets />
          <Markets />
        </div>
      </div>
    </div>
  )
}
