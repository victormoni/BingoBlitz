// src/App.tsx
import { Header } from './components/Header'; // Seu componente Header
import { NumberPicker } from './components/NumberPicker';// Componente que criamos
import './global.css';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <NumberPicker />
    </div>
  );
}

export default App;
