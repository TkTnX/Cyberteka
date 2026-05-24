import { Button } from "../../shared";
import "./_book.scss";
export const Book = () => {
  return (
    <section className="book">
      <div className="book__wrapper">
        <div className="book__content">
          <h3 className="book__title">Забронируй место!</h3>
          <form action="" className="book__form">
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
              className="book__input book__label"
              placeholder="Ваши пожелания"
              name="wishes"
            ></textarea>
            <Button text="Забронировать!" />
          </form>
        </div>
      </div>
    </section>
  );
};
