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
    <div
      className={style.displayCard}
      style={{ backgroundColor: backgroundColor[props.type].color }}
    >
      <img src={props.spriteFront} />
      <p>{capitaliseFirstLetter(props.name)}</p>
      <p>{capitaliseFirstLetter(props.type)}</p>
      <ul>
        {props.stats.map((stat) => {
          return (
            <li>
              {capitaliseFirstLetter(stat.stat.name)}: {stat.base_stat}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
