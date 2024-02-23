import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';

const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <div>
      <footer className='bg-secondary'>
        <Container>
        <Row>
            <Col className='text-center'>
            <p>Star Wars Planets &copy; {date}</p>
            </Col>
        </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
