import type { IZone } from "../../shared";
import { Characteristic } from "../Characteristic";
import "./_bigZone.scss";

interface Props {
  zone: IZone;
}

export const BigZone = ({ zone }: Props) => {
  return (
    <section className="bigZone">
      <div className="bigZone__container container">
        <h1 className="bigZone__title">
          зона <span>{zone.title}</span>{" "}
        </h1>
        <div className="bigZone__characteristics">
          <h2 className="bigZone__characteristics-title">Характеристики</h2>
          <div className="bigZone__characteristics-list">
            {zone.characteristics.map((char) => (
              <Characteristic key={char.id} char={char} />
            ))}
          </div>
        </div>

        <div className="bigZone__prices">
          <h2 className="bigZone__prices-title">ТАРИФЫ И ЦЕНЫ</h2>
                  <div className="bigZone__prices-list">
                      
          </div>
        </div>
      </div>
    </section>
  );
};
