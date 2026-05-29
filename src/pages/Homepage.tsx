import { lazy, Suspense } from "react";
import { Book, Hero, Sales, Zones } from "../widgets";
const Location = lazy(() => import("../widgets/Location/Location"));
const Gallery = lazy(() => import("../widgets/Gallery/Gallery"));
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
      <Suspense fallback={null}>
        <Location />
      </Suspense>
    </>
  );
};
