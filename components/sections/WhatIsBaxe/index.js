import { Container, Row, Col } from 'react-bootstrap'
import YouTube from 'react-youtube'

import styles from './WhatIsBaxe.module.css'

const WhatIsBaxe = () => {
  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 1
    },
  }

  return (
    <div className={styles.WhatIsBaxeContainer}>
      <Container fluid>
        <Row>
          <Col
            lg={12}
            style={{
              padding: '80px 0 20px',
              textAlign: 'center',
            }}
          >
            <h1 style={{ fontWeight: '800', }}>
              What is Baxe?
            </h1>
            <p>
            BAXE is more than just a digital currency. It’s the gateway between traditional financial systems and the emerging digital economy.
            </p>
          </Col>
          <Col
            lg={12}
            style={{
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center', justifyContent: 'center'
            }}
          >
            <YouTube
              className="mfp-hide embed-responsive embed-responsive-21by9"
              videoId='3_2065uJzcU'
              opts={opts}
            />
          </Col>
          <Col
            lg={12}
            style={{
              padding: '40px 0 20px',
              textAlign: 'center',
            }}
          >
            <p>
              BAXE delivers fast, secure and borderless transactions with the greatest of ease. It gives you complete control over your business and personal finances and uses the best security features available to ensure that your money is in safe hands.
              <br />
              <br />
              Setting up your BAXE account is easy, and only takes a few seconds.
              Register your account and start using BAXE now by downloading the free BAXE App.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatIsBaxe