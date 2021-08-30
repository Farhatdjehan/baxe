import { Container } from 'react-bootstrap'

import { Header, Footer2 } from '../components/partials'

import RegularBanner from '../components/sections/RegularBanner'
import WhatIsBaxe from '../components/sections/WhatIsBaxe'
import OurPartners from '../components/sections/OurPartners'

export default function About() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner title='About us' subtitle='Read more about us' />
        <WhatIsBaxe />
        <OurPartners />
      </Container>
      <Footer2 />
    </>
  )  
}
