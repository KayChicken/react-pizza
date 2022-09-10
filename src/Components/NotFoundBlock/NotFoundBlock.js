import React from 'react';
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {

    return (
        <div className={styles.root}>
            <span>😰</span>
            <br/>
            <h1>Ничего не найдено</h1>
            <p>К сожалению данная страница отсутствует</p>
        </div>
    );
};

export default NotFoundBlock;