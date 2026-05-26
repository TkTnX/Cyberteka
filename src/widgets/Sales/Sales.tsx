import { Sale } from "../../entities";
import { Button, SALES } from "../../shared";
import "./_sales.scss";
export const Sales = () => {
  return (
    <section className="sales">
      <div className="sales__content container">
        <h2 className="sales__title">АКЦИЙ И СКИДКИ НА ЛЮБОЙ ВКУС</h2>
        <div className="sales__list">
          {SALES.map((sale) => (
            <Sale key={sale.id} sale={sale} />
          ))}
        </div>
        <Button className="sales__button" text="ЕЩЕ АКЦИИ →" />
      </div>
    </section>
  );
};
