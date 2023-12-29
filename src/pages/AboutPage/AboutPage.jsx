import Footer from "../../components/Footer/Footer";
import css from "./AboutPage.module.css";
import sprite from "../../assets/sprite.svg";
import { Container } from "react-bootstrap";

const AboutPage = () => {
  const librares = [
    {
      id: "1",
      name: "Tailwind CSS",
    },
    {
      id: "2",
      name: "Framer Motion",
    },
    {
      id: "3",
      name: "Styled Components",
    },
    {
      id: "4",
      name: "daisy UI",
    },
    {
      id: "5",
      name: "Bootstrap",
    },
  ];
  const learning = [
    {
      id: "11",
      name: "HTML",
    },
    {
      id: "12",
      name: "CSS/SASS",
    },
    {
      id: "13",
      name: "JavaScript",
    },

    {
      id: "14",
      name: "React.js",
    },
    {
      id: "15",
      name: "Redux",
    },
    {
      id: "16",
      name: "Redux Toolkit",
    },
    {
      id: "17",
      name: "TypeScript",
    },

    {
      id: "18",
      name: "Node.js",
    },
  ];

  return (
    <>
      <section>
        <Container className={css.wrapperAboutMe}>
          <div className={css.sectionAboutMe}>
            <span>I am Mariia, a Front-End developer based in Kyiv.</span>
            <p>
              Hey there, I am Mariia, a Front-End developer from Kyiv{" "}
              <svg className={css.iconChestnut}>
                <use href={`${sprite}#icon-chestnut`}></use>
              </svg>{" "}
              with a passion is building optimized solutions and high-quality
              code. I actively study HTML, CSS, JavaScript, React, Redux, Redux
              Toolkit, and Node.js. Additionally, I am familiar with TypeScript.
              Currently, I am continuing to improve my skills and knowledge, but
              I am always open to suggestions.
            </p>
            <p>
              When I am not writing code, I usually spend time with my family,
              pet my cat, and enjoy the city I live in. Thank you for visiting
              my portfolio!
            </p>
          </div>
          <div className={css.sectionSidebar}>
            <h3 className={css.listTitle}>Styles I use</h3>
            <ul className={css.list}>
              {librares.map((lib) => (
                <li className={css.listItem} key={lib.id}>
                  {lib.name}
                </li>
              ))}
            </ul>
            <h3 className={css.listTitle}>What I am learning</h3>
            <ul className={css.list}>
              {learning.map((item) => (
                <li className={css.listItem} key={item.id}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <div className={css.border}></div>
      <Footer id="contact" />
    </>
  );
};

export default AboutPage;
