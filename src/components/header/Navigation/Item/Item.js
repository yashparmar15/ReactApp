import React from 'react';

import styles from './Item.module.css';

const item = (props) => (
    <p className = {styles.Item} >{props.children}</p>
);

export default item;