import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';

function App() {

  const[showPara, setShowPara] = useState(false);

  const getPara = () => {
    setShowPara(prevParaState => !prevParaState);
  };

  return (
    <div className={styles.app}>
      <h1>Hello</h1>
      {showPara && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>}
      <Button onClick={getPara} >Click for para</Button>
    </div>
  );
}

export default App;
