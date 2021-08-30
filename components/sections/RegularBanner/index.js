import { Container, Row, Col, Jumbotron } from 'react-bootstrap'

import styles from './RegularBanner.module.css'

const RegularBanner = ({ title, subtitle, bannerFor }) => {
  const getBannerStyle = () => {
    switch (bannerFor) {
      case 'business':
        return styles.RegularBannerBusiness
      case 'mobile':
        return styles.RegularBannerMobile
      case 'support':
        return styles.RegularBannerSupport
      default:
        return styles.RegularBanner
    }
  }

  const renderTop = () => {
    return (
      <Container fluid className={styles.TopBanner}>
        <Row>
          <Col lg={6} md={10}>            
            <h1 style={{ color: '#fff', fontWeight: 'bold' }}>{title}</h1>
            <p style={{ color: '#fff' }}>
              {subtitle}
            </p>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
   <Jumbotron className={getBannerStyle()}>
     {renderTop()}
   </Jumbotron> 
  )
}

export default RegularBanner