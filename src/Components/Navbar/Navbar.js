import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import DrawerToggle from './DrawerToggle';
import classes from './Navbar.module.css';

const Navbar = (props) =>{
    return(
        <div className="navbar-fixed">
            <nav className="nav-wrapper #212121 grey darken-3">
                <div className="container">
                    <Link className="brand-logo" to="/">KELLY'S</Link>
                    {/* <Link to="/" className="sidenav-trigger" >
                        <i className="material-icons">menu</i>
                    </Link> */}
                    <ul className="right hide-on-med-and-down" >
                        <li><NavLink to="/skills" activeStyle={{textDecoration:'underline',textDecorationColor: 'fe5a1d',color: '#fe5a1d'}}>SKILLS</NavLink></li>
                        <li><NavLink to="/projects" activeStyle={{textDecoration:'underline',textDecorationColor: '#fe5a1d',color: '#fe5a1d'}}>PROJECTS</NavLink></li>
                        <li><NavLink to="/contact" activeStyle={{textDecoration:'underline',textDecorationColor: '#fe5a1d',color: '#fe5a1d'}}>CONTACT ME</NavLink></li>
                    </ul>
                </div>
                    <div className={classes.NavbarToggleButton}>
                        <DrawerToggle clicked={props.drawerClicked}/>
                    </div>
            </nav>   

           
        </div>
    );
}

export default Navbar;