import { Link } from "react-router";
import "./_locations.scss";
export const BaumanaLocation = () => {
  return (
    <div className="locations baumanaLocation">
      <h3 className="locations__title">
        КИБЕРТЕКА <br /> <span>НА БАУМАНСКОЙ</span>
      </h3>
      <Link className="locations__link" to={"/main"}>
        Подробнее →
      </Link>
    </div>
  );
};
