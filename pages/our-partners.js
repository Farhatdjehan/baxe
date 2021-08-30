import { Container } from "react-bootstrap";

import { Header, Footer2 } from "../components/partials";

import RegularBanner from "../components/sections/RegularBanner";
import OurPartners from "../components/sections/OurPartners";

export default function PagePartners() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner
          title="Our Partner"
        />
        <OurPartners />
      </Container>
      <Footer2 />
    </>
  );
}
