import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

import styles from './WhatIsBaxe.module.css'
import image1 from '../../../public/howitworks/1.png'
import image2 from '../../../public/howitworks/2.png'
import image3 from '../../../public/howitworks/3.png'

const HowItWorks = () => {
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
              How it works?
            </h1>
            <p>
            BAXE for Business is a one stop shop business tool that allows you to have complete control
            over every aspect of your business. From issuing and paying invoices, tracking orders and ensuring tax compliance,
            BAXE for Business will reduce your business costs and provide the most valuable thing a business operator can have.
            More time on their hands to run their business.
            </p>
          </Col>
          <Col lg={12}>
            <Container>
              <Row>
              <Col lg={6} xs={12} style={{ textAlign: 'center', marginTop: 20 }}> 
                <Image
                  src={image1}
                  alt="Baxe Login"
                />
              </Col>
              <Col lg={6} xs={12} style={{ textAlign: 'center', marginTop: 20 }}> 
                <Image
                  src={image2}
                  alt="Baxe Login"
                />
              </Col>
              <Col lg={12} xs={12} style={{ textAlign: 'center', marginTop: 20 }}> 
                <Image
                  src={image3}
                  alt="Baxe Login"
                />
              </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HowItWorks