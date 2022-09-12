import "../styles/page/hero.scss";
import cover from "../images/cover.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__container--text">
        <p className="hero__text">
          A Spanish software company
          <spam className="hero__text--spamDate"> founded in 2021</spam>
          dedicated to developing applications for
          <spam className="hero__text--spam"> iOS</spam>. Throughout all this
          time we have been able to work on many projects that have made us grow
          as a company.
        </p>
        <p className="hero__text">
          We develop native applications using the frameworks and design
          patterns most demanded by the market.
          <spam className="hero__text--spam">
            Our passion for what we do is our hallmark
          </spam>
          .
        </p>
      </div>
      <div className="hero__container--img">
        <img src={cover} alt="Cover" className="hero__img" />
      </div>
    </div>
  );
}

export default Hero;
