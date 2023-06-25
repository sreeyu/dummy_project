import React from "react";
import styles from './Button.module.css'

function Button(props) {

    const btnClass = `${styles.btn} ${props.isClicked ? styles.clicked : ''}`

    return(
        <button className={btnClass} onClick={props.onClick}>{props.children}</button>
    );
};

export default React.memo(Button);