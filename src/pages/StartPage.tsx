import { BaumanaLocation, ProfLocation } from "../entities";
import { StartScreen } from "../widgets";

export const StartPage = () => {
  return (
    <>
      <StartScreen />
      <ProfLocation />
      <BaumanaLocation />
    </>
  );
};
