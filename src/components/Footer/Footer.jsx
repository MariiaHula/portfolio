const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <>
      <div>
        <a
          href="https://www.linkedin.com/in/mariia-hula-b3a3501b7/"
          onClick={(e) => {
            e.preventDefault();
            openInNewTab("https://www.linkedin.com/in/mariia-hula-b3a3501b7/");
          }}
        >
          Linkendin
        </a>
        <a
          href="https://t.me/MariiaHula"
          onClick={(e) => {
            e.preventDefault();
            openInNewTab("https://t.me/MariiaHula");
          }}
        >
          Telegram
        </a>
        <a
          href="mailto:mariyagulaya@gmail.com"
          onClick={(e) => {
            e.preventDefault();
            openInNewTab("mailto:mariyagulaya@gmail.com");
          }}
        >
          Email
        </a>
        <a
          href="https://docs.google.com/document/d/12uPlD08o0rhp07ojuTfpy9iiaxo9VWEvrTzXpM_Xjoc/edit?usp=sharing"
          onClick={(e) => {
            e.preventDefault();
            openInNewTab(
              "https://docs.google.com/document/d/12uPlD08o0rhp07ojuTfpy9iiaxo9VWEvrTzXpM_Xjoc/edit?usp=sharing"
            );
          }}
        >
          Resume
        </a>
      </div>
    </>
  );
};

export default Footer;
