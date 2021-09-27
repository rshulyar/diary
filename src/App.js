import Sidebar from './components/sidebar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles["app"]}>
      <Sidebar/>
      <div className={styles["div2"]}></div>
    </div>
  );
}

export default App;