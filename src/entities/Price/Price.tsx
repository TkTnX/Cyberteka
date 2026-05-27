import type { IPrice } from "../../shared";
import "./_price.scss";

interface Props {
  price: IPrice;
}

export const Price = ({ price }: Props) => {
  return (
    <div className="price">
      <div style={{ borderColor: price.borderColor }} className="price__content">
        <h4 className="price__title">{price.title}</h4>
        <p className="price__available">{price.available}</p>
        <img className="price__image" src={price.image} alt={price.title} />
        <p className="price__rate">{price.rate}</p>
        <p className="price__price">{price.price} ₽</p>
      </div>
    </div>
  );
};
