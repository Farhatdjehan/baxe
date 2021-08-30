import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import {NotificationContainer, NotificationManager} from 'react-notifications'

const Footer = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [message, setMessage] = useState()
  const [email, setEmail] = useState()

  const firstNameInput = ({ target: {value} }) => {
    console.log(value)
    setFirstName(value)
  }

  const lastNameInput = ({ target: {value} }) => {
    console.log(value)
    setLastName(value)
  }

  const messageInput = ({ target: {value} }) => {
    console.log(value)
    setMessage(value)
  }

  const emailInput = ({ target: {value} }) => {
    console.log(value)
    setEmail(value)
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    await emailjs.send("service_7wngwze", "template_3z4x5dx", {
      firstname: firstName,
      lastname: lastName,
      message: message,
      email: email,
    }, 'user_hAbRsLGcS6WfIhm1jnhCF')
    .then(res => console.log(res.text))
    .catch(err => console.log(err))

    Promise.all([
      setFirstName(''),
      setLastName(''),
      setEmail(''),
      setMessage(''),
      NotificationManager.success('Success send message', 'Send Message to Baxe Team')
    ]).then(values => console.log(values))
  }

  return (
    <div
      className="baxe-container footer-container"
      style={{
        backgroundColor: '#000',
      }}
    >
      <Container fluid>
        <Row>
          <Col lg={6} md={12} style={{ display: 'flex', alignItems: 'center' }}>
            <div className='contact-text'>
              <h6 style={{ color: '#FFF' }}>CONTACT US</h6>
              <h3 style={{ color: '#FFF', fontWeight: 'bold' }}>
                Know More <br/> About Our <br/> Business
              </h3>
            </div>
            <div className='contact-text-mobile'>
              <h6 style={{ color: '#FFF' }}>CONTACT US</h6>
              <h3 style={{ color: '#FFF', fontWeight: 'bold' }}>
                Know More About Our Business
              </h3>
            </div>
          </Col>
          <Col lg={5} md={12}>
            <Form onSubmit={submitEmail}>
              <Row>
                <Form.Group as={Col} controlId="formFirstName">
                  <Form.Control
                    placeholder="First name"
                    name="firstName"
                    value={firstName}
                    onChange={firstNameInput}
                  />
                </Form.Group>
                <Form.Group as={Col} controlId="formLastName">
                  <Form.Control
                    placeholder="Last name"
                    name="lastName"
                    value={lastName}
                    onChange={lastNameInput}
                  />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={emailInput}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  as="textarea"
                  rows={8}
                  placeholder="Message"
                  name="message"
                  value={message}
                  onChange={messageInput}
                />
              </Form.Group>
              <Button type="submit" style={{ backgroundColor: '#F69B11', borderColor: '#F69B11'}}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <NotificationContainer/>
    </div>
  )
}

export default Footer