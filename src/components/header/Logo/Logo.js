import React from 'react';

import styles from './Logo.module.css';

import Logo from '../../../assets/images/logo.svg';

const logo = (props) => (
    <div className = {styles.LogoDiv}>
        <img className = {styles.Logo} src = {Logo} alt = "Logo"/>
    </div>
);

export default logo;