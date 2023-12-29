import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navhead from "react-bootstrap/Navbar";
import "./Navbar.css";
import sprite from "../../assets/sprite.svg";
import { useEffect } from "react";
const Navbar = () => {
  const navigate = useNavigate();
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#work") {
      const section = document.getElementById("work");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleWorkLinkClick = (e) => {
    e.preventDefault();
    navigate("/#work");
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
              <a
                className="custom-link third after"
                onClick={(e) => {
                  scrollToSection("work", e);
                  handleWorkLinkClick(e);
                }}
                href="#work"
              >
                Work
              </a>
            </Nav.Item>
            <Nav.Item>
              <Link className="custom-link third after" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className="custom-link third after"
                onClick={(e) => scrollToSection("contacts", e)}
                href="#contacts"
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
