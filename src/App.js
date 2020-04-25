import React, {Component} from 'react';
import Home from './Components/Home/Home';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import SideDrawer from './Components/Navbar/Sidebar';
import Backdrop from './Components/Backdrop/Backdrop';
import classes from './App.module.css';


class App extends Component{
  state={
    SideDrawerOpen: false
  };

  drawerTogglerClickHandler = () =>{
    this.setState((prevState) =>{
        return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({SideDrawerOpen:false});
  };

  render(){
    let backdrop;

        if(this.state.SideDrawerOpen){  
            backdrop = <Backdrop backdropClicked={this.backdropClickHandler}/>;
        }

    return (
      <BrowserRouter>
        <div className={classes.main}>
          <Navbar drawerClicked={this.drawerTogglerClickHandler}/> 
          <SideDrawer show={this.state.SideDrawerOpen}/>
          {backdrop}
          <Route path='/' exact component={Home}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/projects' component={Projects}/>
          <Route path='/contact' component={Contact}/>
          <Footer/>
        </div>
      </BrowserRouter>
  );}
}

export default App;
