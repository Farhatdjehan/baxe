import { Container } from 'react-bootstrap'

import { Header, Footer2 } from '../components/partials'

import RegularBanner from '../components/sections/RegularBanner'
import WhatIsDigitalEconomy from '../components/sections/WhatIsDigitalEconomy'
import WhatsNext from '../components/sections/WhatsNext'

export default function DigitalEconomy() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner title='The Digital Economy' subtitle='Read more about Digital Economy' />
        <WhatIsDigitalEconomy />
        <WhatsNext />
      </Container>
      <Footer2 />
    </>
  )  
}
