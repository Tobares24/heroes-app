import { getHeoresByPublisher } from "../helpers/getHeroesByPublisher";
import PropTypes from "prop-types";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";

export const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeoresByPublisher(publisher), [publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

HeroesList.propTypes = {
  publisher: PropTypes.string.isRequired,
};
