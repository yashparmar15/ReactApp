import React from 'react';

import styles from './Button.module.css';

const button = (props) => (
<button className = {styles.Button} style = {{float : props.float , border : props.border , color : props.color , marginTop : props.top , backgroundColor : props.bgcolor , marginLeft : props.left}}>{props.children}</button>
)

export default button;