import Footer from "../../components/Footer/Footer";
import Work from "../../components/Work/Work";
import sprite from "../../assets/sprite.svg";
import Container from "react-bootstrap/Container";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <section className={css.sectionHero}>
        <Container>
          <div className={css.wrapperHero}>
            <svg className={css.iconHero}>
              <use href={`${sprite}#icon-hero`}></use>
            </svg>
            <div className={css.animation}>
              <h1 className={css.titleHero}>
                <span className={css.hello}>Greetings!</span> <br /> My name is
                Maria, I am a Front-end developer from Kyiv
              </h1>
            </div>
          </div>
          <div className={css.border}></div>
        </Container>
      </section>
      <Work />
      <Footer />
    </>
  );
};

export default HomePage;
