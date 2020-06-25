import React from 'react';

import Logo from './Logo/Logo';

import styles from './Header.module.css';

import Navigation from './Navigation/Navigation';

const header = (props) => (
    <div className = {styles.Header}>
        <Logo />
        <Navigation />
    </div>
);

export default header;