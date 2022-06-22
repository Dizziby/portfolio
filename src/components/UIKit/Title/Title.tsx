import React from 'react';
import styles from "./Title.module.scss";

type TitlePropsType = {
    name: string
}

export const Title: React.FC<TitlePropsType> = (props) => {
    return (
        <h2 className={styles.title}>{props.name}</h2>
    );
};