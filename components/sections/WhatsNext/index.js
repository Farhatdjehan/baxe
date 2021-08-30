import { Container, Row, Col } from 'react-bootstrap'

import styles from './WhatsNext.module.css'

const WhatsNext = () => {
  return (
    <>
      <div className={styles.BannerContainer}>
        <div className={styles.GradientContainer}>
          <Container fluid>
            <Row>
              <Col lg={3} xs={12}>
                <div className={styles.Title}>
                  <h3 style={{ fontWeight: '800', color: 'white'}}>What&rsquo;s <br /> Next?</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={styles.ContentContainer}>
        <Container fluid>
          <Row>
            <Col lg={12} xs={12} style={{ marginBottom: 20 }}>
              <h6 style={{ color: 'white' }}>
               The process of moving from the existing economy to a completely digital economy is already underway. But there are many crucial pieces of technology that need to be further developed to complete this process.
              </h6>
            </Col>
            <Col lg={12} xs={12} style={{ marginBottom: 20 }}>
              <h6 style={{ fontWeight: 'bold', color: 'white' }}>
               Blockchain
              </h6>
              <p style={{ color: 'white' }}>
                Blockchain has the power to positively impact every aspect of human life. From improving health services to allowing property transactions to occur within minutes, blockchain technology possesses limitless possibilities. Whilst the potential of blockchain is universally recognised, the best way to maximise this potential is still a work in progress.
              </p>
            </Col>
            <Col lg={12} xs={12} style={{ marginBottom: 20 }}>
              <h6 style={{ fontWeight: 'bold', color: 'white' }}>
               Smart Contracts
              </h6>
              <p style={{ color: 'white' }}>
                Smart contracts are contracts with coded instructions that execute the terms and conditions that exist between the two parties. These contracts can be used by a café to purchase coffee beans, or by a parent to pay for their children’s school fees. This technology has the potential to automate the provision of goods and services, reduce paperwork, decrease costs and prevent disputes.
              </p>
            </Col>
            <Col lg={12} xs={12} style={{ marginBottom: 20 }}>
              <h6 style={{ fontWeight: 'bold', color: 'white' }}>
               Digital Assets
              </h6>
              <p style={{ color: 'white' }}>
              There are many different forms of assets that are a part of our economy such as resources, stocks, bonds, property, debts and money. Proof of ownership, and the recording of the exchanges of these assets, are all documented using paper-based methods. This leads to human errors, high levels of distrust and inefficiencies. The transition from relying on the use of physical assets to the use of digital assets will supercharge the global economy.
              </p>
            </Col>
            <Col lg={12} xs={12} style={{ marginBottom: 20 }}>
              <h6 style={{ fontWeight: 'bold', color: 'white' }}>
                Regulation & Governance
              </h6>
              <p style={{ color: 'white' }}>
                No society can properly function without proper regulations and governance. Even free market countries have rules and laws that govern how their economies operate. The digital economy will be no different. It will require comprehensive and well thought out laws, as well as appropriate entities to enforce them for it to truly prosper. Both national and international organisations will need to come together to develop frameworks that will prevent crimes and stimulate growth within the global digital economy.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WhatsNext