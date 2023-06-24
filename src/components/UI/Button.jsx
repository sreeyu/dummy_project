import React from "react";
import styles from './Button.module.css'

function Button(props) {

    console.log("button running")

    return(
        <button className={styles.btn} onClick={props.onClick}>{props.children}</button>
    );
};

export default React.memo(Button);