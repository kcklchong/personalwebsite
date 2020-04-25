import React, {Component} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import classes from './Contact.module.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            email: '',
            message: ''
        }
    }
    
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    };
    
  
    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        
        axios({
            url: '/api/save',
            method: 'POST',
            data: payload
        })
        .then(() => {
            console.log('Data has been sent to server');
            alert('Thanks for your message! Will get back to you shortly!')
            this.resetForm();
        })
        .catch(() => {
           console.log('Error');
        });;
    };

    resetForm = () => {
        this.setState({
            name: '',
            email: '',
            message: ''
        });
    };
    
    render(){
        
        return(
            <div>
                <Jumbotron fluid className={classes.contacttitle}>
                    <Container>
                        <h3>Let's Talk!</h3>
                    </Container>
                </Jumbotron>

                <Container className={classes.formcontainer}>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup style={{paddingBottom:'10px'}}>
                            <Label for="name">Name</Label>
                            <Input type="text" name="name" id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup style={{paddingBottom:'10px'}}>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
                        </FormGroup>
                        <FormGroup style={{paddingBottom:'10px'}}>
                            <Label for="message">Message</Label>
                            <Input type="textarea" name="message" id="message" rows="5" placeholder="What is on your mind?" value={this.state.message} onChange={this.handleChange}/>
                        </FormGroup>
                        <Button>Submit</Button>
                        
                    </Form>
                </Container>
                <div className={classes.social}>
                    <p>Let's stay connected!</p>
                    <SocialIcon url="https://www.linkedin.com/in/kellychongca/" style={{ height: 60, width: 60}} target="_blank" network="linkedin"/>
                    <SocialIcon url="./contact" style={{ height: 60, width: 60 }} network="email"/>
                    <SocialIcon url="https://www.facebook.com/kelly.chong.3975" style={{ height: 60, width: 60 }} target="_blank" network="facebook"/>
                </div>
            </div>
        );
    }
}

export default Contact;