import Image from 'next/image'
import { Container, Row, Col  } from 'react-bootstrap'

import styles from './OurPartners.module.css'

import FCG from '../../../public/FCG.svg'
import CRC from '../../../public/CRC.svg'
import ICVE from '../../../public/ICVE.svg'

const OurPartners = () => {
  return (
    <div className={styles.OurPartnersContainer}>
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
              Our Partners
            </h1>
            <p>
            We have partnered with some of the most innovative and respected companies in the tech industry to develop the cutting-edge technology behind BAXE.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} style={{ textAlign: 'center', marginBottom: 50 }}>
            <Image
              src={FCG}
              alt="FCG Logo"
              height={100}
              width={200}
            />
            <h6 style={{ fontWeight: '800'}}>Future Currency Group</h6>
            <p>The Future Currency Group is developing world-class technical infrastructure and applications that will transform the global economy.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} xs={12} style={{ textAlign: 'center', marginBottom: 40 }}>
            <h6 style={{ fontWeight: '800'}}>BAXE is proud to be involved with several initiatives that seek to develop the emerging digital economy.</h6>
          </Col>
          <Col lg={6} xs={12} style={{ textAlign: 'center' }}>
            <Image
              src={CRC}
              alt="CRC Logo"
              height={100}
              width={150}
            />
            <h6 style={{ fontWeight: '800'}}>Cooperative Research Center</h6>
            <p>
            We support the creation of the CRC for the Australian Blockchain Superhighway. The CRC is a publicly and privately funded research project that will develop roadmaps to move our society into the new digital age.
            </p>
          </Col>
          <Col lg={6} xs={12} style={{ textAlign: 'center' }}>
            <Image
              src={ICVE}
              alt="ICVE Logo"
              height={100}
              width={350}
            />
            <h6 style={{ fontWeight: '800'}}>International Council for the Virtual Economy</h6>
            <p>
              BAXE is championing the formation of an international body, known as the International Council for the Virtual Economy, to regulate and develop policies that will help grow the emerging digital economy.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default OurPartners