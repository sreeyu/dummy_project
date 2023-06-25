import React, { useMemo } from "react";
import styles from './DemoList.module.css'

function DemoList(props){

    console.log("list running")

    const { list } = props;

    const sorted = useMemo (() => {
        console.log('list sorted')
        return list.sort((a,b) => a- b);
    }, [list])
    return(
        <div>
            <h1>{props.title}</h1>
            <ul className={styles.list}>
                {sorted.map(num => 
                    <li key={num}>{num}</li>
                )}
            </ul>
        </div>
    );
};

export default React.memo(DemoList);