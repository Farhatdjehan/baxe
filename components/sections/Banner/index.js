import { Container, Row, Col, Jumbotron, Button  } from 'react-bootstrap'
import { IoMdPlayCircle } from 'react-icons/io'
import Image from 'next/image'

import styles from './Banner.module.css'
import time from '../../../public/featured/time.png'
import bloomberg from '../../../public/featured/bloomberg.png'
import forbes from '../../../public/featured/forbes.png'

const FeaturedLogo = ({
  logoImg,
  alt,
  height,
  width,
}) => {
  return (
    <Col lg={4} md={4} xs={4} className={styles.FeaturedLogo}>
      <Image
        src={logoImg}
        alt={alt}
        height={height}
        width={width}
      />
    </Col>
  )
}

const Banner = ({ onClickLearnMore }) => {
  const renderTop = () => {
    return (
      <Container fluid className={styles.TopBanner}>
        <Row>
          <Col lg={6} md={10}>
            <h4 style={{ color: '#fff', }}>The world’s most innovative</h4>
            <h1 style={{ color: '#fff', fontWeight: 'bold' }}>digital gateway<br />platform.</h1>
            <p style={{ color: '#fff' }}>
              BAXE is ushering in the next phase of the digital era. We are enabling the digital dream by redefining the internet, the way it was originally intended. Transparency and security are at the forefront of design. The BAXE platform is decentralised, open and integrated into your everyday life.
            </p>
            <div className={styles.CTAButtonContainer}>
              <Button className={styles.CTAButton} onClick={onClickLearnMore}>
                <IoMdPlayCircle
                  size={25}
                  color='#F69B11'
                  style={{ position: 'relative', top: -2 }}
                />{' '}
                LEARN MORE
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  const renderBottom = () => {
    return (
      <Container fluid>
        <Row className={styles.BottomBanner}>
          <Col lg={12} sm={12}>
            <p style={{ color: '#6d7777', textAlign: 'center'}}>As featured on:</p>
          </Col>
          <FeaturedLogo
            logoImg={time}
            alt="Time Logo"
            height={30.13}
            width={116}
          />
          <FeaturedLogo
            logoImg={bloomberg}
            alt="Bloomberg Logo"
            height={29.05}
            width={188.36}
          />
          <FeaturedLogo
            logoImg={forbes}
            alt="Forbes Logo"
            height={36}
            width={142}
          />
        </Row>
      </Container>
    )
  }

  return (
    <Jumbotron className={styles.Banner}>
      {renderTop()}
      {/* <hr style={{ borderWidth: 3, color: '#929090'}} /> */}
      {/* {renderBottom()} */}
      {/* <hr style={{ borderWidth: 3, color: '#929090'}} /> */}
    </Jumbotron>
  )
}

export default Banner