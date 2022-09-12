import "../styles/page/section.scss";

function Section(props) {
  return (
    <section className="section">
      <h2 className={"section__title section__title--" + props.className}>
        {props.title}
      </h2>
      <p className={"section__text section__text--" + props.className}>
        {props.text}
      </p>
    </section>
  );
}

Section.defaultProps = {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore. magna aliqua. Ut enim ad minim.",
};

export default Section;
