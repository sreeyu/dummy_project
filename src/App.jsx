import React, { useState, useCallback } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';
import DemoList from './components/List/DemoList';

function App() {

  const[showPara, setShowPara] = useState(false);
  const [allowButton, setAllowButton] = useState(false);


  const getButton = () => {
    setAllowButton(prevState => !prevState);
  }

  const getPara = useCallback (() => {

    if(allowButton){
      setShowPara(prevParaState => !prevParaState);
    }
  }, [allowButton]);

  const btnContent = allowButton ? 'Deactivate Button' : 'Activate Button'

  return (
    <div className={styles.app}>
      <main className={styles.main}>
      <h1>Hello</h1>
      <Demo show={showPara} />
      <Button isClicked={allowButton} onClick={getButton}>{btnContent}</Button>
      <Button onClick={getPara} >Click for para</Button>
      </main>
      <section className={styles.section}>
        <h1>My List</h1>
        <DemoList list={[3, 5, 7,23,56, 90, 82]} />
        <Button>Change List Title</Button>
      </section>
    </div>
  );
}

export default App;
