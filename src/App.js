import Sidebar from './components/sidebar';
import Body from './components/body';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles["app"]}>
      <Sidebar/>
      <Body/>
    </div>
  );
}

export default App;