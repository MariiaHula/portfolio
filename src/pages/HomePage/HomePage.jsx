import Footer from "../../components/Footer/Footer";
import Work from "../../components/Work/Work";
import sprite from "../../assets/sprite.svg";
import Container from "react-bootstrap/Container";

import "./HomePage.css";
function HomePage() {
  return (
    <section>
      <Container>
        <div className="wrapper-hero">
          <svg className="icon-hero">
            <use href={`${sprite}#icon-hero`}></use>
          </svg>

          <h1 className="title-hero">
            <span className="hello">Greetings!</span> <br /> My name is Maria, I
            am a Front-end developer from Kyiv
          </h1>
        </div>

        <Work id="work" />
        <Footer id="contact" />
      </Container>
    </section>
  );
}

export default HomePage;
