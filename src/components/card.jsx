import Button from "./button";

export default function Card({ offer }) {
  return (
    <li
      className={`content__container__element ${offer.gridArea}`}
      style={{ backgroundImage: `url(${offer.image})` }}
    >
      <h2 className="content__container__element__title">{offer.title}</h2>
      <p className="content__container__element__description">
        {offer.description}
      </p>

      <Button variant="secondary" />
    </li>
  );
}
