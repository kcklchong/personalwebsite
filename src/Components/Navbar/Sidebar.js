import React from 'react';
import classes from './Sidebar.module.css';
import {Link} from 'react-router-dom';

const sideDrawer = (props) => {
    
    let drawerClasses = [classes.SideDrawer];

    if(props.show){
        drawerClasses = [classes.SideDrawer, classes.Open];
    }
    return (<nav className={drawerClasses.join(' ')} >
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/skills">SKILLS</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li><Link to="/contact">CONTACT</Link></li> 
        </ul>
    </nav>);
};

export default sideDrawer;
