import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Carousel  } from 'react-bootstrap'
import { IoMdArrowDroprightCircle, IoMdArrowDropleftCircle } from 'react-icons/io'

import Pay from '../../../public/features/pay.png'
import Secure from '../../../public/features/secure.png'
import Global from '../../../public/features/global.png'
import Funds from '../../../public/features/funds.png'
import Reduce from '../../../public/features/reduce.png'
import Trade from '../../../public/features/trade.png'
import Conduct from '../../../public/features/conduct.png'
import Manage from '../../../public/features/manage.png'
import Baxe from '../../../public/features/baxe.png'

import styles from './Features.module.css'

const Feature = ({
  image,
  title
}) => {
  return (
    <Col lg={4} md={4} style={{ textAlign: 'center' }}>
      <div style={{
        marginBottom: 20
      }}>
        <Image
          src={image}
          alt={title}
          width={112}
          height={112}
        />
      </div>
      <p style={{ fontWeight: 'bold' }}>{title}</p>
    </Col>
  )
}

const features = [
  { image: Pay, caption: 'Pay for everyday items' },
  { image: Secure, caption: 'Keep your funds secure' },
  { image: Global, caption: 'Transfer your funds across the globe' },
  { image: Funds, caption: 'Receive funds from anywhere in the world' },
  { image: Reduce, caption: 'Reduce transaction costs' },
  { image: Trade, caption: 'Trade with people from any country' },
  { image: Conduct, caption: 'Conduct business transactions' },
  { image: Manage, caption: 'Manage your business operations' },
  { image: Baxe, caption: 'Connect you to the BAXE community' },
]

const Features = ({ onClickWatchNow }) => {
  const [featuresData, setFeaturesData] = useState([])

  useEffect(() => {
    const assemblyData = () => {
      const chunkedFeatures = chunkFeatures(features, 3)
      setFeaturesData( f => [...featuresData, ...chunkedFeatures])
    }
    assemblyData()
  }, [])

  const chunkFeatures = (data, chunkSize) => {
    var results = []

    while (data.length) {
      results.push(data.splice(0, chunkSize));
    }

    return results
  }

  const renderFeatures = (index) => {
    if(featuresData.length !== 0) {
      return featuresData[index].map((i, index) => (
        <Feature
          key={index}
          image={i.image}
          title={i.caption}
        />
      ))
    }
    return
  }

  const renderDesktopCarousel = () => {
    return (
      <Col lg={12} className={styles.FeaturesDesktop}>
        <Carousel
          style={{ height: 250 }}
          nextIcon={
            <p style={{ color: '#F69B11', fontSize: 40 }}>
              <IoMdArrowDroprightCircle />
            </p>
          }
          prevIcon={
            <p style={{ color: '#F69B11', fontSize: 40 }}>
              <IoMdArrowDropleftCircle />
            </p>
          }
        >
          <Carousel.Item>
            <Container>
              <Row>
                {renderFeatures(0)}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {renderFeatures(1)}
              </Row>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container>
              <Row>
                {renderFeatures(2)}
              </Row>
            </Container>
          </Carousel.Item>
        </Carousel>
      </Col>
    )
  }

  const renderMobileCarousel = () => {
    return (
      <Col lg={12} className={styles.FeaturesMobile}>
        <Carousel
          style={{ height: 250 }}
          nextIcon={
            <p style={{ color: '#F69B11', fontSize: 40 }}>
              <IoMdArrowDroprightCircle />
            </p>
          }
          prevIcon={
            <p style={{ color: '#F69B11', fontSize: 40 }}>
              <IoMdArrowDropleftCircle />
            </p>
          }
        >
          {features.map((i, index) => (
            <Carousel.Item key={index}>
              <Feature
                image={i.image}
                title={i.caption}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    )
  }

  return (
    <div className={styles.FeaturesContainer}>
      <Container fluid>
        <Row>
          <Col
            lg={12}
            style={{
              padding: '80px 0 40px',
              textAlign: 'center',
              marginBottom: 50
            }}
          >
            <h1 style={{ fontWeight: '800', }}>
              What can BAXE do for you?
            </h1>
          </Col>
          {renderDesktopCarousel()}
          {renderMobileCarousel()}
          <Col lg={12} style={{ textAlign: 'center', marginTop: 30 }}>
            <Button onClick={onClickWatchNow} style={{ backgroundColor: '#008779', borderColor: '#008779'}}>
              Watch Now
             </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features