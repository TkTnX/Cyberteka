import { Suspense } from "react";
import { Book, Gallery, Hero, Location, Sales, Zones } from "../widgets";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <Zones />
      <Suspense fallback={null}>
        <Gallery />
      </Suspense>
      <Book />
      <Sales />
      <Location />
    </>
  );
};
