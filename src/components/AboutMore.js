import "../styles/page/aboutMore.scss";

function AboutMore() {
  return (
    <div className="about">
      <h2 className="about__title">Our Philosophy</h2>
      <div className="about__text">
        <p className="about__text--paragraph">
          {" "}
          In a world where competition is maximum, it is no longer enough to do
          a good job, in addition, it is necessary to facilitate your clients
          the way they communicate with you. And having your application for iOS
          and Android platforms is essential to ensure success in your business.
        </p>
        <p className="about__text--paragraph">
          {" "}
          We love to work with maximum attention to tiny details, this is how
          the best applications are done. Transparency and communication with
          our clients. If you are not happy, neither are we. These are our main
          rules.
        </p>
      </div>
      <div className="about__footer">
        <p className="about__footer--text">Dinoroco team</p>
      </div>
    </div>
  );
}

export default AboutMore;
