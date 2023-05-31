import { capitaliseFirstLetter } from "../../utils/stringFunctions";

import style from "./DisplayCard.module.css";

type EntityStats = {
  base_stat: number;
  stat: {
    name: string;
    url: string;
  };
};

export type DisplayCardProps = {
  key: number;
  name: string;
  spriteFront: string;
  stats: EntityStats[];
  type: string;
};

interface backgroundColourType {
  [key: string]: {
    color: string;
  };
}

const backgroundColor: backgroundColourType = {
  normal: {
    color: "#AAAA99",
  },
  fire: {
    color: "#FF4422",
  },
  water: {
    color: "#3399FF",
  },
  electric: {
    color: "#FFCC33",
  },
  grass: {
    color: "#77CC55",
  },
  ice: {
    color: "#66CCFF",
  },
  fighting: {
    color: "#BB5544",
  },
  poison: {
    color: "#AA5599",
  },
  ground: {
    color: "#DDBB55",
  },
  flying: {
    color: "#8899FF",
  },
  psychic: {
    color: "#FF5599",
  },
  bug: {
    color: "#AABB22",
  },
  rock: {
    color: "#BBAA66",
  },
  ghost: {
    color: "#6666BB",
  },
  dragon: {
    color: "#6666BB",
  },
  dark: {
    color: "#775544",
  },
  steel: {
    color: "#AAAABB",
  },
  fairy: {
    color: "#EE99EE",
  },
};

export const DisplayCard = (props: DisplayCardProps) => {
  return (
    <div className={style.displayCard} style={{ backgroundColor: backgroundColor[props.type].color }}>
      <div className={style.entityNameContainer}>
        <h1 className={style.entityName}>{capitaliseFirstLetter(props.name)}</h1>
        <p className={style.type}>{capitaliseFirstLetter(props.type)}</p>
      </div>
      <div className={style.statsContainer}>
        <div className={style.stats1}>
          <p>
            {/* Speed */}
            {capitaliseFirstLetter(props.stats[5].stat.name)}: {props.stats[5].base_stat}
          </p>
          <p>
            {/* Attack */}
            {capitaliseFirstLetter(props.stats[1].stat.name)}: {props.stats[1].base_stat}
          </p>
          <p>
            Sp. Attack:
            {props.stats[3].base_stat}
          </p>
        </div>
        <img className={style.sprite} src={props.spriteFront} />
        <div className={style.stats2}>
          <p>HP: {props.stats[0].base_stat}</p>
          <p>
            {/* Defense */}
            {capitaliseFirstLetter(props.stats[2].stat.name)}: {props.stats[2].base_stat}
          </p>
          <p>Sp. Defence: {props.stats[4].base_stat}</p>
        </div>
      </div>
    </div>
  );
};
