import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import styles from './WhatIsBaxe.module.css'
import woman from '../../../public/contact_us.png'
import phonenumber from '../../../public/support/phonenumber.svg'
import email from '../../../public/support/email.svg'
import chat from '../../../public/support/chat.svg'

const ContactUs = () => {
  return (
    <div className={styles.WhatIsBaxeContainer}>
      <Container fluid>
        <Row>
          <Col
            lg={12}
            style={{
              padding: '80px 0 0',
              textAlign: 'center',
            }}
          >
            <h1 style={{ fontWeight: '800', }}>
              Contact us
            </h1>
          </Col>
          <Col lg={12}>
            <Container>
              <Row>
                <Col lg={6} style={{ textAlign: 'right', marginTop: 20 }}>
                  <Image
                    src={woman}
                    alt="Support by BAXE"
                  />
                </Col>
                <Col lg={6} style={{ textAlign: 'left', marginTop: 20, display: 'flex', alignItems: 'center'}}>
                  <div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20
                    }}>
                      <Image
                        src={chat}
                        alt="Chat BAXE admin"
                      />
                      <h6 style={{ marginLeft: 20 }}>Contact us via our onlie webchat</h6>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20
                    }}>
                      <Image
                        src={phonenumber}
                        alt="Chat BAXE admin"
                      />
                      <h6 style={{ marginLeft: 20 }}>+61 7 3051 0202</h6>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 20
                    }}>
                      <Image
                        src={email}
                        alt="Chat BAXE admin"
                      />
                      <h6 style={{ marginLeft: 20 }}>Info@baxe.com</h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactUs