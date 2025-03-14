export default function Card({ offer }) {
  return (
    <li
      className={`content__container__element ${offer.gridArea}`}
      style={{ backgroundImage: `url(${offer.image})` }}
    >
      <input type="checkbox" id={offer.id} className="expand__toggle" />
      <h2 className="content__container__element__title">{offer.title}</h2>
      <p className="content__container__element__description">
        {offer.description}
      </p>
      <label htmlFor={offer.id} className="expand__button">
        Learn more
      </label>
    </li>
  );
}
