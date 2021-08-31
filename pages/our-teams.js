import { Container } from "react-bootstrap";

import { Header, Footer2 } from "../components/partials";

import RegularBanner from "../components/sections/RegularBanner";
import OurTeamsNew from "../components/sections/OurTeamsNew";

export default function TeamPage() {
  return (
    <>
      <Header />
      <Container fluid>
        <RegularBanner title="Our Teams" />
        <OurTeamsNew />
      </Container>
      <Footer2 />
    </>
  );
}
