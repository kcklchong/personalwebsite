import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import classes from './Projects.module.css';
import { Container, Row, Col } from 'reactstrap';
// import ProjectCard from './ProjectCard';
import Burger from '../../Assets/burger2.png';
import HeatStroke from '../../Assets/heatstroke.jpg';
import SnowFlake from '../../Assets/snowflake.jpg';
import {Card, CardImg, CardHeader, CardBody, Button} from 'reactstrap';

class Projects extends Component{
    onDemoClick(){
        alert('This project is still in progress, please visit again. Thank you for your patience!');
    }
    // state={
    //     visible:false
    // }

    // toggle(){
    //     this.setState({
    //         visible:!this.state.visible
    //     });
    // }
    render(){
        return(
            <div>
                <Jumbotron fluid className={classes.projecttitle}>
                    <Container>
                        <h3>Projects</h3>
                    </Container>
                </Jumbotron>
                {/* <Alert color="info" isOpen={this.state.visible} toggle={this.toggle.bind(this)}>This project is still in progress, please visit again. Thank you for your patience!</Alert> */}
                <Container style={{width:'80%'}}>
                    <Row className={classes.projectrow}>
                        <Col >
                            <Card className={classes.projectcard} style={{padding:'5%' }}>
                                <CardHeader><h5>The Burger App</h5></CardHeader>
                                <CardImg top width="100%" src={Burger} alt="Card image cap" />
                                <CardBody style={{textAlign:'justify'}}>
                                    <p>A web app used to order customized burgers which is implemented using ReactJS, JavaScript and CSS as well as Firebase as beackend database.</p>
                                <Button onClick={this.onDemoClick} color="success">DEMO</Button>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col >
                            <Card className={classes.projectcard}  style={{padding:'5%' }}>
                                <CardHeader><h5>The In-Car Heatstroke Preventor</h5></CardHeader>
                                <CardImg top width="100%" src={HeatStroke} alt="Card image cap" />
                                <CardBody style={{textAlign:'justify'}}>
                                    <p>A stand-alone device built to detect and report potential risk of in-car heatstroke accidents where the microship and sensors are programmed using C++.</p>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col >
                            <Card className={classes.projectcard}  style={{padding:'5%' }}>
                                <CardHeader><h5>Android GPS Locator</h5></CardHeader>
                                <CardImg top width="100%" src={SnowFlake} alt="Card image cap" />
                                <CardBody style={{textAlign:'justify'}}>
                                    <p>An Android fitness app designed to locate users and show users' calories burnt through walking or running.</p>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div> 
        )
    }
}

export default Projects;