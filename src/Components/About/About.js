import React, {Component} from 'react';
import MePic from '../../Assets/About.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import classes from './About.module.css';
import Resume from '../../Assets/Resume_Kelly_Chong.pdf';


class About extends Component{
    onCVClick(){
        window.open(Resume,"_blank");
    }

    render(){
        return(
            <div>
                <Container className={classes.About}>
                    <Row>
                        <h4>About Me</h4>
                        <img src={MePic} alt="profile"/>
                        <p>Hi, my name is Kelly, I'm a Montreal-based engineering graduate who has an enormous passion for technology. 
                                I graduated as an electrical engineer, but truth to be told, I am interested in coding too! 
                                I have learnt various programming languages both at school and self-taught. I'm always ready for new 
                                challenges and have plenty of room up my sleeve for more achievements!</p>
                        <p>To know more about me, feel free to ping me up in the Contact page or click on the button below for my resumé!
                                Hope you like my website and thank you for visiting! </p>
                        <Button onClick={this.onCVClick} variant="dark" >Resumé</Button>
                    </Row>
                </Container>
            </div>
        );
    }
}
    
export default About;