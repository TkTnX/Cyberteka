import { Book, Gallery, Hero, Location, Sales, Zones } from "../widgets";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <Zones />
      <Gallery />
      <Book />
      <Sales />
      <Location />
    </>
  );
};
