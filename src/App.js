import Sidebar from './components/sidebar';
import Body from './components/body';
import classes from './App.module.css';

function App() {

  return (
    <div className={classes["app"]}>
      <Sidebar/>
      <Body/>
    </div>
  );
}

export default App;