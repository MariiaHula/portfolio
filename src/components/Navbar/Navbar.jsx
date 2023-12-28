import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navhead from "react-bootstrap/Navbar";
import "./Navbar.css";
import sprite from "../../assets/sprite.svg";
const Navbar = () => {
  const scrollToSection = (link, event) => {
    event.preventDefault();
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        onComplete: () => {
          event.target.blur();
        },
      });
    }
  };

  return (
    <Navhead expand="lg">
      <Container>
        <Navhead.Brand className="wrapper-logo">
          <svg className="icon-logo">
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
          Mariia Hula
        </Navhead.Brand>
        <Navhead.Toggle aria-controls="basic-navbar-nav" />
        <Navhead.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end">
            <Nav.Item>
              <Link className="custom-link third after" to="/">
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="custom-link third after" to="/#work">
                Work
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="custom-link third after" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className="custom-link third after"
                onClick={(e) => scrollToSection("contact", e)}
                href="#contact"
              >
                Contacts
              </a>
            </Nav.Item>
          </Nav>
        </Navhead.Collapse>
      </Container>
    </Navhead>
  );
};

export default Navbar;
