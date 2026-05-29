import { Button } from "../Button";
import "./_bookForm.scss";
export const BookForm = () => {
  return (
    <div className="book__wrapper">
      <div className="book__content">
        <h3 className="book__title">Забронируй место!</h3>
        <form className="book__form">
          <div className="book__inputs">
            <input
              type="text"
              className="book__input"
              placeholder="Имя"
              name="name"
            />
            <input
              type="text"
              className="book__input"
              placeholder="Дата"
              name="date"
            />
            <input
              type="text"
              className="book__input"
              placeholder="Время"
              name="time"
            />
            <label className="book__label">
              Количество гостей
              <input type="number" placeholder="1" className="book__input" />
            </label>
            <input
              type="tel"
              className="book__input book__label"
              placeholder="Номер телефона"
              name="phone"
            />
            <textarea
              className="book__input book__textarea"
              placeholder="Ваши пожелания"
              name="wishes"
            ></textarea>
          </div>
          <Button className="book__button" text="Забронировать!" />
        </form>
      </div>
      <img
        loading="lazy"
        src="/images/book/book.png"
        alt="Book"
        className="book__image"
      />
    </div>
  );
};
