import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import styles from "../../styles/Header.module.css";
import logo from "../../public/logo.png";
import ivce from "../../public/ivce.png";

const Menu = ({ isShow, closeMenu }) => {
  const renderMenuList = (title, list, isHalf) => {
    return (
      <Col lg={isHalf ? 6 : 12}>
        <h6
          style={{
            color: "#FFF",
            fontFamily: "Montserrat",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          {title}
        </h6>
        <ul>
          {list.map((i, index) => (
            <li key={index} style={{ color: "#FFF", fontSize: 14 }}>
              <a href={i.link}>{i.title}</a>
            </li>
          ))}
        </ul>
      </Col>
    );
  };

  return (
    <div
      className="MenuContainer"
      style={{ display: isShow ? "block" : "none" }}
    >
      <div className="MenuCol">
        <Container>
          <Row>
            <Col lg={6} xs={6} style={{ marginBottom: 18 }}>
              <Image src={logo} alt="Baxe Logo" height={30} width={110} />
            </Col>
            <Col lg={6} xs={6} style={{ textAlign: "right" }}>
              <a onClick={closeMenu} className={styles.Menu}>
                <IoMdClose />
              </a>
            </Col>
          </Row>
          <Row>
            {renderMenuList("About", [
              { title: "What is BAXE?", link: "/about" },
              { title: "Why use BAXE?", link: "/about" },
              { title: "Our Team", link: "#" },
              { title: "Our Partners", link: "/our-partners" },
            ])}
            {renderMenuList("The Digital Economy", [
              {
                title: "What is the Digital Economy?",
                link: "/digital_economy",
              },
              { title: `What's next?`, link: "/digital_economy" },
            ])}
            {renderMenuList("The Digital Economy", [
              { title: "How it Works?", link: "/baxe_for_business" },
            ])}
            {/* {renderMenuList('Mobile App', [
              { title: 'How to Use?', link: '/how-to-use' },
              { title: 'Download', link: '/download' },
            ])} */}
            {renderMenuList(
              "Support",
              [
                { title: "Support", link: "/support" },
                { title: "Terms & Conditions", link: "#" },
                { title: "Privacy Policy", link: "#" },
              ],
              true
            )}
            <Col
              lg={6}
              style={{
                textAlign: "center",
              }}
            >
              <Image src={ivce} alt="Baxe Logo" height={70} width={140} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <Menu isShow={showMenu} closeMenu={closeMenu} />
      <Navbar expand="lg" className={styles.Container}>
        <Navbar.Brand href="#" style={{ display: "flex" }}>
          <Link passHref={true} href="/">
            <Image src={logo} alt="Baxe Logo" height={43.94} width={158} />
          </Link>
        </Navbar.Brand>
        <div className="banner-divider" />
        <div className="justify-content-end">
          <a onClick={openMenu} className={styles.Menu}>
            <FiMenu />
          </a>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
