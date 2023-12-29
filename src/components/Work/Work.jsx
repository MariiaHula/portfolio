import tracker from "../../assets/images/tracker.jpg";
import phonebook from "../../assets/images/phonebook.jpg";
import tasty from "../../assets/images/tasty.jpg";
import { Container } from "react-bootstrap";
import "./Work.css";

const Work = () => {
  return (
    <section id="work">
      <Container className="container">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <h1>Expenstracker app</h1>
              <p>Team project</p>
              <a
                href="https://nadiyniy.github.io/money_makers/"
                target="_blank"
                rel="noreferrer"
              >
                view
              </a>
              <img
                src={tracker}
                className="d-block w-100"
                alt="Expenstracker app"
              />
            </div>
            <div className="carousel-item">
              <h1>Expenstracker app</h1>
              <p>Team project</p>
              <a
                href="https://nadiyniy.github.io/money_makers/"
                target="_blank"
                rel="noreferrer"
              >
                view
              </a>
              <img
                src={phonebook}
                className="d-block w-100"
                alt="Phonebook app"
              />
            </div>
            <div className="carousel-item">
              <h1>Expenstracker app</h1>
              <p>Team project</p>
              <a
                href="https://nadiyniy.github.io/money_makers/"
                target="_blank"
                rel="noreferrer"
              >
                view
              </a>
              <img
                src={tasty}
                className="d-block w-100"
                alt="Tasty Treads app"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Work;
