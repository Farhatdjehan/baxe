import { Container, Row, Col } from 'react-bootstrap'

import styles from './WhatIsBaxe.module.css'

const WhatIsDigitalEconomy = () => {
  return (
    <div className={styles.WhatIsBaxeContainer}>
      <Container fluid>
        <Row>
          <Col
            lg={12}
            style={{
              padding: '80px 0 0',
              textAlign: 'center',
            }}
          >
            <h1 style={{ fontWeight: '800', }}>
              What is digital economy?
            </h1>
            <p>
            Our global economy has traditionally relied on the exchange of physical assets such as US dollars, gold and property.
            These exchanges require immense amounts of paperwork and the involvement of many different parties to take place.
            <br />
            <br />
            Another key part of the global economy, conducting financial transactions,
            currently requires both the person sending and the person receiving the funds to have a bank account.
            These transactions can often take days to occur, and are subject to high fees from banks or third-party remittance companies.
            <br />
            <br />
            A truly global digital economy will completely transform the world as we know it.
            Physical assets will be replaced with digital assets, and the exchanges of these assets across the globe will be fully digitised.
            Digital records will replace paper-based records, and digital contracts will facilitate how trade and commerce takes place.
            <br />
            <br />
            The transition from existing to digital economies will lead to rapid increases in efficiencies, lower costs, reductions in human error,
            higher levels of trust and greater levels of security.
            <br />
            <br />
            BAXE has recognised that this transition is inevitable. This is why we are at the forefront of this truly transformative moment in human history,
            and we want you to be a part of this journey with us.
            <br />
            <br />
            Don’t be left behind, download the free BAXE App today and be a part of this defining point in time.  
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatIsDigitalEconomy