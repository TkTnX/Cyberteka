import { Button } from "../../shared";
import "./_hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__content-top">
          <img
            loading="lazy"
            fetchPriority="high"
            src="/images/icons/logo.svg"
            alt="Logo"
          />
          <div>
            <h1 className="hero__title">
              КИБЕРТЕКА <br /> <span>НА ПРОФСОЮЗНОЙ</span>
            </h1>
          </div>
        </div>
        <ul className="hero__content-list">
          <li>Профсоюзная улица 22/10к1</li>
          <li>Работаем круглосуточно!</li>
          <li>8 977 320 88 88</li>
        </ul>
        <Button text="Забронировать!" className="hero__content-button" />
      </div>
    </section>
  );
};
