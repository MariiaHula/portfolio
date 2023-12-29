import tracker from "../../assets/images/tracker.jpg";
import phonebook from "../../assets/images/phonebook.jpg";
import tasty from "../../assets/images/tasty.jpg";
import { Container, Nav } from "react-bootstrap";
import css from "./Work.module.css";
import sprite from "../../assets/sprite.svg";

const Work = () => {
  return (
    <section id="work" className={css.section}>
      <Container>
        <div className={css.wrapperSection}>
          <img
            src={tracker}
            className="d-block w-50"
            alt="Expenstracker app"
            loading="lazy"
          />
          <div className={css.workWrapper}>
            <h1 className={css.titleWork}>Expenstracker app</h1>
            <p>
              The app makes it easy for you to take control of your finances!
              With intuitive features, it simplifies the process of tracking and
              managing expenses, allowing you to manage your financial world
              without stress.
            </p>
            <Nav.Link
              className={css.navLink}
              href="https://nadiyniy.github.io/money_makers/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
              <svg className={css.iconArrow}>
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </Nav.Link>
          </div>
        </div>
        <div className={css.border}></div>

        <div className={css.wrapperSection}>
          <img
            src={phonebook}
            className="d-block w-50"
            alt="Phonebook app"
            loading="lazy"
          />
          <div className={css.workWrapper}>
            <h1 className={css.titleWork}>Phonebook app</h1>
            <p>
              The application, with which it is easy to search and quickly save
              the necessary contacts! Simple search and editing.
            </p>
            <Nav.Link
              className={css.navLink}
              href="https://mariiahula.github.io/Phonebook/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
              <svg className={css.iconArrow}>
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </Nav.Link>
          </div>
        </div>
        <div className={css.border}></div>

        <div className={css.wrapperSection}>
          <img
            src={tasty}
            className="d-block w-50"
            alt="Tasty Treads app"
            loading="lazy"
          />
          <div className={css.workWrapper}>
            <h1 className={css.titleWork}>Tasty Treats app</h1>
            <p>
              A useful application for finding the best recipes. Just save to
              your favorite recipes and watch a detailed step-by-step guide to
              cooking. A rating system and the most popular recipes at your
              fingertips.
            </p>
            <Nav.Link
              className={css.navLink}
              href="https://mariiahula.github.io/js-project-team-2/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
              <svg className={css.iconArrow}>
                <use href={`${sprite}#icon-arrow`}></use>
              </svg>
            </Nav.Link>
          </div>
        </div>
        <div className={css.border}></div>
      </Container>
    </section>
  );
};

export default Work;
