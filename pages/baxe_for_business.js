import { Container } from 'react-bootstrap'

import { Header, Footer2 } from '../components/partials'

import RegularBanner from '../components/sections/RegularBanner'
import HowItWorks from '../components/sections/HowItWorks'
import WhatsNext from '../components/sections/WhatsNext'

export default function BaxeForBusiness() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner
          title='BAXE for Business'
          subtitle='Read more about BAXE offers for business'
          bannerFor='business'
        />
        <HowItWorks />
      </Container>
      <Footer2 />
    </>
  )  
}
