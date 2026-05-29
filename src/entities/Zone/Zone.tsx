import { Link } from "react-router";
import type { IZone } from "../../shared";
import "./_zone.scss";
import { ArrowRight } from "lucide-react";

interface Props {
  zone: IZone;
}

export const Zone = ({ zone }: Props) => {
  return (
    <div className="zone">
      <div className="zone__content">
        <p className="zone__feature">{zone.feature}</p>
        <h3 className="zone__title">{zone.title}</h3>
        <div className="zone__image">
          <img loading="lazy" src={zone.images[0]} alt={zone.title} />
        </div>
        <p className="zone__subtitle">{zone.subtitle}</p>
        <Link className="zone__link" to={`/zones/${zone.id}`}>
          Подробнее
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
};
