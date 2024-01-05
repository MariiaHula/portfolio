import tracker from "../../assets/images/tracker.jpg";
import phonebook from "../../assets/images/phonebook.jpg";
import tasty from "../../assets/images/tasty.jpg";
import movies from "../../assets/images/movies.jpg";

import { Container, Nav } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import css from "./Work.module.css";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";

const Work = () => {
  const [slideData] = useState([
    {
      id: "1",
      image: `${tracker}`,
      title: "Expenstracker app",
      description:
        "The app makes it easy for you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing you to manage your financial world without stress.",
      project: "https://nadiyniy.github.io/money_makers/",
    },
    {
      id: "2",
      image: `${phonebook}`,
      title: "Phonebook app",
      description:
        "The application, with which it is easy to search and quickly save the necessary contacts! Simple search and editing.",
      project: "https://mariiahula.github.io/Phonebook/",
    },
    {
      id: "3",
      image: `${movies}`,
      title: "Movies app",
      description:
        "The application is a database of movies. Both general and on-demand navigation, which allows you to quickly find the desired movie. You can also see additional information about the film, cast and reviews.",
      project: "https://mariiahula.github.io/Movies/",
    },
    {
      id: "4",
      image: `${tasty}`,
      title: "Tasty Treats app",
      description:
        "A useful application for finding the best recipes. Just save to your favorite recipes and watch a detailed step-by-step guide to cooking. A rating system and the most popular recipes at your fingertips.",
      project: "https://mariiahula.github.io/js-project-team-2/",
    },
  ]);

  return (
    <section id="work" className={css.section}>
      <Container>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slideData?.map((app) => (
            <SwiperSlide key={app.id}>
              <div className={css.wrapperSection}>
                <img
                  src={app.image}
                  className="d-block w-50"
                  alt={app.title}
                  loading="lazy"
                />
                <div className={css.workWrapper}>
                  <h1 className={css.titleWork}>{app.title}</h1>
                  <p>{app.description}</p>
                  <Nav.Link
                    className={css.navLink}
                    href={app.project}
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
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={css.border}></div>
      </Container>
    </section>
  );
};

export default Work;
