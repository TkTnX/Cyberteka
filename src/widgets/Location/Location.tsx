import { Map, YMaps } from "@pbe/react-yandex-maps";
import { Button } from "../../shared";
import "./_location.scss";
const Location = () => {
  return (
    <section className="location">
      <div className="location__content">
        <h3 className="location__title">Как нас найти?</h3>
        <div className="location__addresses">
          <div className="location__address">
            <b>Метро Профсоюзная</b> <span className="orange">●</span>{" "}
            <p>4 минуты пешком</p>
          </div>
          <div className="location__address">
            <b>Метро Академическая</b> <span className="red">●</span>{" "}
            <p>5 минут пешком</p>
          </div>
        </div>
        <div className="location__contacts">
          <p className="location__contact">
            Адрес: <span>Профсоюзная улица 22/10 к1</span>
          </p>
          <p className="location__contact">
            Телефон: <span>+7 977 320 88 88</span>
            <a aria-label="Перейти в TG" href="#!">
              <img src="/images/icons/tg.svg" alt="Телеграм" />
            </a>
            <a aria-label="Перейти в WhatsApp" href="#!">
              <img src="/images/icons/wa.svg" alt="Ватцап" />
            </a>
          </p>
        </div>
        <div className="location__questions">
          <b>По вопросам сотрудничества</b>
          <p>
            Коммерческие предложения можно направить в группу ВК или в Телеграм
          </p>
        </div>
        <div className="location__buttons">
          <Button text="Забронировать!" />
          <a aria-label="Перейти в ВК" href="#!">
            <img src="/images/icons/vk.svg" alt="vk" />
          </a>
        </div>
      </div>
      <div className="location__loc">
        <YMaps>
          <Map
            defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            className="location__map"
          />
        </YMaps>
      </div>
    </section>
  );
};

export default Location;
