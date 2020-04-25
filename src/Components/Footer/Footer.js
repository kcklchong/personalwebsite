import React from 'react';
import classes from './Footer.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () =>{
    return(
        <div>
            <footer>
                <Container fluid>
                    <Row className={classes.FooterRow}>
                        <Col> 
                            Copyright © 2020 - Kelly Chong. All Rights Reserved.
                        </Col>
                        
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default Footer;