import React from "react";
import styles from './DemoList.module.css'

function DemoList(props){

    return(
        <div>
            <h1>{props.title}</h1>
            <ul className={styles.list}>
                {props.list.sort((a,b) => a- b).map(num => 
                    <li>{num}</li>
                )}
            </ul>
        </div>
    );
};

export default DemoList;