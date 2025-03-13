import { offers } from "../utils/mock-data";
import Card from "./card";
import DescriptionSection from "./description-section";

export default function Content() {
  return (
    <section className="content">
      <h2 className="content__title">Offers</h2>
      <ul className="content__container">
        {offers.map((offer) => (
          <Card key={offer.id} offer={offer} />
        ))}
      </ul>
      <DescriptionSection />
    </section>
  );
}
