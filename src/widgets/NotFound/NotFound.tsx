import { BookForm } from "../../shared";
import "./_notFound.scss";
export const NotFound = () => {
  return (
    <section className="notFound">
      <div className="notFound__container container">
        <div>
          <h1 className="notFound__title">
            4
            <img src="/images/notFoundLetter.svg" alt="0" /> 4
          </h1>
          <p className="notFound__subtitle">
            Что то пошло не так, страница не найдена...
          </p>
          <p className="notFound__description">
            Если ты попал сюда когда искал акцию, не беда! Назови промокод{" "}
            <span>404</span>
            администратору при регистрации и получи 200₽ на банас!
          </p>
        </div>
        <BookForm />
      </div>
    </section>
  );
};
