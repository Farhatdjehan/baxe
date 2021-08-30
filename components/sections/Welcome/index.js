import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Container, Row, Col, Button  } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import useScrollPosition from './useScrollPosition'

import WelcomeImage from '../../../public/welcome-image.png'
import Hand from '../../../public/hand.png'

import communication from '../../../public/welcome/communication.png'
import banking from '../../../public/welcome/banking.png'
import cloud from '../../../public/welcome/cloud.png'
import internet from '../../../public/welcome/internet.png'
import community from '../../../public/welcome/community.png'

import styles from './Welcome.module.css'

const highlights = [
  { image: communication, title: 'Communication', caption: 'Keep your communications private, safe and encrypted.' },
  { image: banking, title: 'Banking', caption: 'Fast, secure payment services and banking that transcends borders.' },
  { image: cloud, title: 'Cloud Storage', caption: 'Private and decentralised storage, access your data from anywhere. ' },
  { image: internet, title: 'Internet Storage', caption: 'A decentralised network of devices and applications, integrated into your everyday life.' },
  { image: community, title: 'People Community', caption: 'Embrace opportunities to connect and empower your community in the digital age.' },
]

const ValuesOfBaxeMobile = () => {
  return (
    <div className={styles.WelcomeImageMobile}>
      <Image
        src={WelcomeImage}
        alt='Baxe Values'
        width={400}
        height={310}
      />
    </div>
  )
}

const ValuesOfBAXEDesktop = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([...highlights])
  }, [])

  const setRightPosition = (index) => {
    let position
    switch (index) {
      case 0:
        position = 100
        break;
      case 1:
        position = 50
        break;
      case 2:
        position = 0
        break;
      case 3:
        position = 0
        break;
      case 4:
        position = 50
        break;
      default:
        position = 100
        break;
    }
    return position
  }

  const renderValues = () => {
    if(data.length !== 0) {
      return data.map((i, index) => (
        <ScrollAnimation
          className={styles.WelcomeImageDesktop}
          animateIn="fadeIn"
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'relative',
            right: setRightPosition(index)
          }}
        >
          <Image
            src={i.image}
            alt='Baxe Values'
            width={100}
            height={100}
          />
          <div style={{ maxWidth: '50%' }}>
            <p style={{ marginBottom: 0, fontWeight: 'bold', fontSize: 18 }}>{i.title}</p>
            <p style={{ fontSize: 18 }}>{i.caption}</p>
          </div>
        </ScrollAnimation>
      ))
    }
  }

  return (
    <div style={{}}>
      {renderValues()}
    </div>
  )
}

const Welcome = ({
  onClickWatchNow
}) => {
  const [hideOnScroll, setHideOnScroll] = useState(true)
  const [scrollIndicator, setScrollIndicator] = useState(0)
  const [handPosition, setHandPosition] = useState('50%')

  useScrollPosition(({ prevPos, currPos }) => {
    const isShow = currPos.y > prevPos.y
    setScrollIndicator(currPos.y)
    if (isShow !== hideOnScroll) setHideOnScroll(isShow)
  }, [hideOnScroll])

  useEffect(() => {
    if (scrollIndicator < -447) {
      setHandPosition('40%')
    } else {
      setHandPosition('50%')
    }
  }, [scrollIndicator])

  return (
    <div className={styles.WelcomeContainer}>
      <Container fluid>
        <Row>
          <Col lg={12} style={{ textAlign: 'center', marginBottom: 50 }}>
            <h4>Welcome to the</h4>
            <h4 style={{ fontWeight: '800' }}>Digital Economy</h4>
            <p>Click to the button to watch the video</p>
            <Button
              onClick={onClickWatchNow}
              style={{
                backgroundColor: '#008779',
                borderColor: '#008779'
              }}
            >
              Watch Now
            </Button>
          </Col>
          <Col lg={6} className={styles.WelcomeImageDesktop}>
            <div style={{
              width: '100%',
              marginTop: 20,
              position: 'relative',
              right: 0,
              transform: `translateX(${handPosition})`,
              transition: 'transform 1s'
            }}>
              <Image
                src={Hand}
                alt='Baxe Values'
                width={550}
                height={725}
              />
            </div>
          </Col>
          <Col lg={6}>
            <ValuesOfBAXEDesktop />
            <ValuesOfBaxeMobile />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Welcome