import Image from 'next/image'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'
import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'
import { AiFillLinkedin } from 'react-icons/ai'

import logo from '../../public/logo.png'
import ivce from '../../public/ivce.png'

const Menu = ({ title, menus }) => {
  return (
    <Col lg md={4}>
      <h6 style={{ color: '#fff', fontWeight: 'bold'}}>{title}</h6>
      <ul>
        {menus.map((i, index) => {
          return (
            <li key={index}>
              <a href={i.link} style={{ color: '#fff'}}>
                {i.menu}
              </a>
            </li>
          )
        })}
      </ul>
    </Col>
  )
}

const Footer2 = () => {
  return (
    <div className='footer-bottom'>
      <Container fluid>
        <Row>
          <Col lg={2}>
            <Link passHref={true} href='/'>
              <Image
                src={logo}
                alt="Baxe Logo"
                height={43.94}
                width={158}
              />
            </Link>
            <p style={{ color: '#fff', fontSize: 16, marginTop: 20 }}>
              BAXE harnesses revolutionary new technologies to create a truly borderless and connected global economy.
            </p>
          </Col>
          <Menu
            title="About"
            menus={[
              { link: '/about', menu: 'What is BAXE?' },
              { link: '/about', menu: 'Why use BAXE?' },
              { link: '#', menu: 'Our Team' },
              { link: '/our-partners', menu: 'Our Partners' }
            ]}
          />
          <Menu
            title="The Digital Economy"
            menus={[
              { link: '/digital_economy', menu: 'What is the Digital Economy?' },
              { link: '/whats-next', menu: "What's next?" },
            ]}
          />
          <Menu
            title="BAXE for Business"
            menus={[
              { link: '/baxe_for_business', menu: 'How it works?' },
            ]}
          />
          {/* <Menu
            title="Mobile App"
            menus={[
              { link: '/how-to-use', menu: 'How to use?' },
              { link: '/download', menu: 'Download' },
            ]}
          /> */}
          <Menu
            title="Support"
            menus={[
              { link: '/support', menu: 'Support' },
            ]}
          />
        </Row>
        <Row>
          <Col lg={2} md={12} style={{ display: 'flex', justifyContent: 'center'}}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
              <a href='https://www.facebook.com/BAXE-102846022065012' target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <FiFacebook />
              </a>
              {/* <a href='#' target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <FiTwitter />
              </a> */}
              <a href='https://www.instagram.com/baxeapp/' target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <FiInstagram />
              </a>
              <a href='https://www.linkedin.com/company/baxe' target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 30, marginRight: 20}}>
                <AiFillLinkedin />
              </a>
            </div>
          </Col>
          <Col lg={6} md={12} style={{ height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{
              color: '#fff',
              fontFamily: `'Montserrat', sans-serif`,
              fontWeight: 'bold'
            }}>
              © 2021 BAXE
            </p>
          </Col>
          <Col lg={4} style={{ textAlign: 'center'}}>
            <Image
              src={ivce}
              alt="Baxe Logo"
              height={80}
              width={157}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer2