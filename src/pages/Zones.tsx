import { BigZone } from "../entities";
import { ZONES } from "../shared";
import { ClubMap } from "../widgets";

export const Zones = () => {
  return (
    <>
      {ZONES.map((zone) => (
        <BigZone zone={zone} />
      ))}
      <ClubMap />
    </>
  );
};
