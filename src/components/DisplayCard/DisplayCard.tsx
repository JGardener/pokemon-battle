import { capitaliseFirstLetter } from "../../utils/stringFunctions";

export type DisplayCardProps = {
  key: number;
  name: string;
};

export const DisplayCard = (props: DisplayCardProps) => {
  return (
    <div>
      <p>{capitaliseFirstLetter(props.name)}</p>
    </div>
  );
};
