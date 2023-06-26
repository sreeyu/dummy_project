import React, { useState, useCallback, useMemo } from 'react';
import styles from './App.module.css';
import Button from './components/UI/Button';
import Demo from './components/Demo/Demo';
import DemoList from './components/List/DemoList';

function App() {

  const[showPara, setShowPara] = useState(false);
  const [allowButton, setAllowButton] = useState(false);
  const [titleName, setTitleName] = useState(false)


  const getButton = () => {
    setAllowButton(prevState => !prevState);
  }

  const getPara = useCallback (() => {

    if(allowButton){
      setShowPara(prevParaState => !prevParaState);
    }
  }, [allowButton]);

  const getTitle = useCallback (() => {
    setTitleName(prevState => !prevState)
  }, [])

  const btnContent = allowButton ? 'Deactivate Button' : 'Activate Button';

  const titleContent = titleName ? 'My List' : 'New Title';

  const items = useMemo(() => [3, 5, 7,23,56, 90, 82], [])

  return (
    <div className={styles.app}>
      <main className={styles.main}>
      <h1>Hello</h1>
      <Demo show={showPara} />
      <Button isClicked={allowButton} onClick={getButton}>{btnContent}</Button>
      <Button onClick={getPara} >Click for para</Button>
      </main>
      <section className={styles.section}>
        <DemoList list={items} title={titleContent} />
        <Button onClick={getTitle} >Change List Title</Button>
      </section>
    </div>
  );
}

export default App;
