import Button from "./button";

export default function IntroSection() {
  return (
    <section className="intro-section">
      <article className="intro-section__article">
        <h1 className="intro-section__article__title">
          Discover the vast expanses of{" "}
          <span className="intro-section__article__title intro-section__article__title--secondary">
            space
          </span>
        </h1>
        <p className="intro-section__article__text">
          Where the possibilities are{" "}
          <span className="intro-section__article__text intro-section__article__text--secondary">
            endless!
          </span>
        </p>
        <Button />
      </article>
    </section>
  );
}
