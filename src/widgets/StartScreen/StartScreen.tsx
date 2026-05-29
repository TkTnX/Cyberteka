import { Button } from "../../shared";
import "./_startScreen.scss";
export const StartScreen = () => {
  return (
    <section className="startScreen">
      <div className="container startScreen__content">
        <div className="startScreen__content-top">
          <img loading="lazy" src="/images/icons/logo.svg" alt="Logo" />
          <div>
            <h1 className="startScreen__title">
              КИБЕРТЕКА <br /> <span>НА ПРОФСОЮЗНОЙ</span>
            </h1>
          </div>
        </div>
        <p className="startScreen__text">
          Выбираешь клуб для того что бы провести вечер? Ты как раз вовремя,
          потому что в июле мы обновили видеокарты до 30 серии!
        </p>
        <Button text="Забронировать!" className="startScreen__content-button" />
      </div>
    </section>
  );
};
