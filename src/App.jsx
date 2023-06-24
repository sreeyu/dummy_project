import React, { useState, useCallback } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';

function App() {

  const[showPara, setShowPara] = useState(false);

  const getPara = useCallback (() => {
    setShowPara(prevParaState => !prevParaState);
  }, []);

  return (
    <div className={styles.app}>
      <h1>Hello</h1>
      <Demo show={false} />
      <Button onClick={getPara} >Click for para</Button>
    </div>
  );
}

export default App;
