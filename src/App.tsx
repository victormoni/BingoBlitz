import { NumberPicker } from './components/NumberPicker';
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <NumberPicker />
    </div>
  );
}

export default App;
