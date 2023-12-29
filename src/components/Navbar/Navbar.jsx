import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navhead from "react-bootstrap/Navbar";
import css from "./Navbar.module.css";
import sprite from "../../assets/sprite.svg";
import classNames from "classnames";

const Navbar = () => {
  const navigate = useNavigate();
  const scrollToSection = (link, event) => {
    event.preventDefault();
    const section = document.getElementById(link);
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        event.target.blur();
      }, 250);
    }
  };

  const handleWorkLinkClick = (e) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      scrollToSection("work", e);
    }, [100]);
  };

  return (
    <Navhead expand="lg">
      <div className="container-sm">
        <Navhead.Brand className={css.wrapperLogo}>
          <svg className={css.iconLogo}>
            <use href={`${sprite}#icon-logo`}></use>
          </svg>
          Mariia Hula
        </Navhead.Brand>
        <Navhead.Toggle aria-controls="basic-navbar-nav" />
        <Navhead.Collapse id="basic-navbar-nav" className={css.collapse}>
          <Nav className={css.justifyContentEnd}>
            <Nav.Item>
              <Link
                className={classNames(css.customLink, css.third, css.after)}
                to="/"
              >
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className={classNames(css.customLink, css.third, css.after)}
                onClick={(e) => {
                  handleWorkLinkClick(e);
                }}
                href="#work"
              >
                Work
              </a>
            </Nav.Item>
            <Nav.Item>
              <Link
                className={classNames(css.customLink, css.third, css.after)}
                to="/about"
              >
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <a
                className={classNames(css.customLink, css.third, css.after)}
                onClick={(e) => scrollToSection("contacts", e)}
                href="#contacts"
              >
                Contacts
              </a>
            </Nav.Item>
          </Nav>
        </Navhead.Collapse>
      </div>
    </Navhead>
  );
};

export default Navbar;
