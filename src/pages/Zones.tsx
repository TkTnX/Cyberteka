import { BigZone } from "../entities";
import { ZONES } from "../shared";

export const Zones = () => {
  return (
    <>
     {ZONES.map((zone) => <BigZone zone={zone} />)}
    </>
  );
};
