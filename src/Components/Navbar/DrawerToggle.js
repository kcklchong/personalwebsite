import React from 'react';
import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    <button className={classes.toggleButton} onClick={props.clicked}>
        {/* <i className="material-icons">menu</i> */}
        <div className={classes.toggleButton_Line}/>
        <div className={classes.toggleButton_Line}/>
        <div className={classes.toggleButton_Line}/>
    </button>
);

export default drawerToggle;