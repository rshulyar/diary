import Sidebar from './components/sidebar';
import { useSelector, useDispatch } from 'react-redux';
import Body from './components/body';
import classes from './App.module.css';

function App() {
const a = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    <div className={classes["app"]}>
      <Sidebar/>
      <Body/>
    </div>
  );
}

export default App;