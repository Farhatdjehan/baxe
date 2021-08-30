import { Container } from 'react-bootstrap'

import { Header, Footer2 } from '../components/partials'

import RegularBanner from '../components/sections/RegularBanner'
import ContactUs from '../components/sections/ContactUs'

export default function Support() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner
          title='Support'
          subtitle='We are here to help'
          bannerFor='support'
        />
        <ContactUs />
      </Container>
      <Footer2 />
    </>
  )  
}
