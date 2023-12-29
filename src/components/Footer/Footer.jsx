import { Container } from "react-bootstrap";
import css from "../Footer/Footer.module.css";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <>
      <section id="contacts">
        <Container>
          <div className={css.wrapperSection}>
            <h1 className={css.contactTitle}>Contacts</h1>
            <div className={css.wrapperContacts}>
              <Nav.Link
                className={css.navLink}
                href="https://www.linkedin.com/in/mariia-hula-b3a3501b7/"
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab(
                    "https://www.linkedin.com/in/mariia-hula-b3a3501b7/"
                  );
                }}
              >
                Linkendin
              </Nav.Link>
              <Nav.Link
                className={css.navLink}
                href="https://t.me/MariiaHula"
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://t.me/MariiaHula");
                }}
              >
                Telegram
              </Nav.Link>
              <Nav.Link
                className={css.navLink}
                href="mailto:mariyagulaya@gmail.com"
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("mailto:mariyagulaya@gmail.com");
                }}
              >
                Email
              </Nav.Link>
              <Nav.Link
                className={css.navLink}
                href="https://docs.google.com/document/d/12uPlD08o0rhp07ojuTfpy9iiaxo9VWEvrTzXpM_Xjoc/edit?usp=sharing"
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab(
                    "https://docs.google.com/document/d/12uPlD08o0rhp07ojuTfpy9iiaxo9VWEvrTzXpM_Xjoc/edit?usp=sharing"
                  );
                }}
              >
                Resume
              </Nav.Link>
              <Nav.Link
                className={css.navLink}
                href="https://github.com/MariiaHula"
                onClick={(e) => {
                  e.preventDefault();
                  openInNewTab("https://github.com/MariiaHula");
                }}
              >
                GitHub
              </Nav.Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Footer;
