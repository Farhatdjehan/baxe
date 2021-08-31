import Image from "next/image";
import { Container, Row, Col, Card } from "react-bootstrap";

import styles from "./OurTeamsNew.module.css";

import FCG from "../../../public/FCG.svg";
import CRC from "../../../public/CRC.svg";
import ICVE from "../../../public/ICVE.svg";
import DUMMY from "../../../public/dummy.jpg";

const OurTeamsNew = () => {
  return (
    <div className={styles.OurTeamsNewContainer}>
      <Container fluid>
        <Row>
          <Col
            lg={12}
            style={{
              padding: "80px 0 20px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontWeight: "800" }}>Our Teams</h1>
            <p>We have a solid team in BAXE.</p>
          </Col>
        </Row>
        <Row>
          <Col lg={4} style={{ textAlign: "center", marginBottom: 50 }}>
            <Card className={styles.CardWrap}>
              <Image src={DUMMY} alt="FCG Logo" style={{ width: "auto" }} />

              <div className={styles.InfoWrapperDetail}>
                <div className={styles.TextWrapper}>
                  <h6 className={styles.NameTeam}>Karina Logan</h6>
                  <div className={styles.SubText}>Development and Business</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} style={{ textAlign: "center", marginBottom: 50 }}>
            <Card className={styles.CardWrap}>
              <Image src={DUMMY} alt="FCG Logo" style={{ width: "auto" }} />

              <div className={styles.InfoWrapperDetail}>
                <div className={styles.TextWrapper}>
                  <h6 className={styles.NameTeam}>Karina Logan</h6>
                  <div className={styles.SubText}>Development and Business</div>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg={4} style={{ textAlign: "center", marginBottom: 50 }}>
            <Card className={styles.CardWrap}>
              <Image src={DUMMY} alt="FCG Logo" style={{ width: "auto" }} />

              <div className={styles.InfoWrapperDetail}>
                <div className={styles.TextWrapper}>
                  <h6 className={styles.NameTeam}>Karina Logan</h6>
                  <div className={styles.SubText}>Development and Business</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurTeamsNew;
