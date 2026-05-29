import { BookForm, type IZone } from "../../shared";
import { Characteristic } from "../Characteristic";
import { Price } from "../Price";
import "./_bigZone.scss";

interface Props {
  zone: IZone;
}
export const BigZone = ({ zone }: Props) => {
  return (
    <section className="bigZone">
      <div className="bigZone__container container">
        <div>
          <h1 className="bigZone__title">
            зона{" "}
            <span style={{ color: zone.color }}>
              {zone.title.toLowerCase() === "приставка" ? "PS5" : zone.title}
            </span>{" "}
          </h1>
          {zone.characteristics.length > 0 && (
            <div className="bigZone__characteristics">
              <h2 className="bigZone__characteristics-title">Характеристики</h2>
              <div className="bigZone__characteristics-list">
                {zone.characteristics.map((char) => (
                  <Characteristic key={char.id} char={char} />
                ))}
              </div>
            </div>
          )}

          {zone.prices.length > 0 && (
            <div className="bigZone__prices">
              <h2 className="bigZone__prices-title">ТАРИФЫ И ЦЕНЫ</h2>
              <div className="bigZone__prices-list">
                {zone.prices.map((price) => (
                  <Price price={price} />
                ))}
                {zone.title.toLowerCase() !== "приставка" && (
                  <div className="bigZone__sales">
                    <div className="bigZone__sale">
                      <div className="bigZone__sale-content">
                        <p>С ПОНЕДЕЛЬНИКА ПО СРЕДУ</p>
                        <span>Скидка 20%</span>
                      </div>
                    </div>
                    <div className="bigZone__sale">
                      <div className="bigZone__sale-content">
                        <p>По утрам с 05:00 до 14:00</p>
                        <span>Скидка 40%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        {zone.title.toLowerCase() === "приставка" && <BookForm />}
      </div>
    </section>
  );
};
