import "./_clubMap.scss";
export const ClubMap = () => {
  return (
    <section className="clubMap">
      <div className="clubMap__container container">
        <h1 className="clubMap__title">Карта клуба</h1>
        <div>
          <img
            loading="lazy"
            src="/images/clubMap.svg"
            className="clubMap__image"
            alt="Карта клуба"
          />
        </div>
      </div>
    </section>
  );
};
