import "./_sale.scss";
import { Link } from "react-router";
import type { ISale } from "../../shared";
import { ArrowRight } from "lucide-react";

interface Props {
  sale: ISale;
}

export const Sale = ({ sale }: Props) => {
  return (
    <div style={{ height: `${sale.height}px` }} className="sale">
      <h3 className="sale__title">{sale.title}</h3>
      <Link className="sale__link" to={`/sales/${sale.id}`}>
        {sale.linkLabel} <ArrowRight />
      </Link>
    </div>
  );
};
