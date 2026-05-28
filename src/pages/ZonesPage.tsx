import { BigZone } from "../entities";
import { ZONES } from "../shared";
import { ClubMap } from "../widgets";

export const ZonesPage = () => {
  return (
    <>
      {ZONES.map((zone) => (
        <BigZone zone={zone} />
      ))}
      <ClubMap />
    </>
  );
};
