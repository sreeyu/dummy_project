import React, { useState, useCallback } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';

function App() {

  const[showPara, setShowPara] = useState(false);
  const [allowButton, setAllowButton] = useState(false);

  const getButton = () => {
    setAllowButton(true);
  }

  const getPara = useCallback (() => {

    if(allowButton){
      setShowPara(prevParaState => !prevParaState);
    }
  }, [allowButton]);

  return (
    <div className={styles.app}>
      <h1>Hello</h1>
      <Demo show={showPara} />
      <Button onClick={getButton}>Activate Button</Button>
      <Button onClick={getPara} >Click for para</Button>
    </div>
  );
}

export default App;
