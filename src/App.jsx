import React from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';

function App() {

  return (
    <div className={styles.app}>
      <h1>Hello</h1>
      <Button >Click for para</Button>
    </div>
  );
}

export default App;
