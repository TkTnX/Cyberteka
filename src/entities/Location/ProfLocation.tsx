import { Link } from "react-router";
import "./_locations.scss";
export const ProfLocation = () => {
  return (
    <div className="locations profLocation">
      <h3 className="locations__title">
        КИБЕРТЕКА <br /> <span>НА ПРОФСОЮЗНОЙ</span>
      </h3>
      <Link className="locations__link" to={"/main"}>Подробнее →</Link>
    </div>
  );
};
