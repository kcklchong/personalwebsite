import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import classes from './Skills.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CPP from '../../Assets/cpp.png';
import Python from '../../Assets/pyt.png';
import Matlab from '../../Assets/matlab.png';
import Javascript from '../../Assets/javascript.png';
import Rea from '../../Assets/react.png';
import sql from '../../Assets/sql.png';

const Skills = () =>{
    return(
        <div>
            <Jumbotron fluid className={classes.skilltitle}>
                <Container>
                    <h3>Skills and Experience</h3>
                </Container>
            </Jumbotron>
            <Container className={classes.skillcon}>
             
                <Row className={classes.skillrow}>
                    <div></div>
                    <Col ><div><Image src={CPP}/></div>C++</Col>
                    <Col ><div><Image src={Python}/></div>Python</Col>
                    <Col ><div><Image src={Matlab}/></div>Matlab</Col> 
                </Row>
              
                <Row className={classes.skillrow}>
                    <div></div>
                    <Col><div><Image src={Javascript}/></div>JavaScript</Col>
                    <Col><div><Image src={Rea}/></div>ReactJS</Col>
                    <Col><div><Image src={sql}/></div>SQL</Col>
                </Row>
                <h6 style={{paddingTop:'5%'}}><strong>Please refer to my resumé on the homepage for more, thanks!</strong></h6>
            </Container>
        </div>
    )
}

export default Skills;