import { Zone } from "../../entities";
import { ZONES } from "../../shared";
import "./_zones.scss";
export const Zones = () => {
  return (
    <section className="zones">
      <div className=" zones__content  ">
        <h2>РАЗНЫЕ ЗОНЫ С РАЗНЫМИ УСЛОВИЯМИ</h2>
        <div className="zones__list">
          {ZONES.map((zone) => (
            <Zone key={zone.id} zone={zone} />
          ))}
        </div>
      </div>
    </section>
  );
};
