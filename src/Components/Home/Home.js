import React, { Component } from 'react';
import MainPic from '../../Assets/Main.jpg';
import Container from 'react-bootstrap/Container';
import About from '../About/About';

class Home extends Component{
    

    render(){
        return(
            <div >
                <Container fluid>
                    <img className="responsive-img" src={MainPic} alt='main pic'></img>
                </Container>
                <About/> 
            </div>
        );
    }
}

export default Home;