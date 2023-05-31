import { ChangeEvent, FormEvent, useState } from "react";

import { DisplayCard } from "./components/DisplayCard/DisplayCard";
import { fetchSingleCharacter } from "./utils/fetchFunctions";

import "./App.css";

const App = () => {
  const [nameInputValue, setNameInputValue] = useState<string>("");
  const [entities, setEntities] = useState<any[]>([]);

  const handleNameInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNameInputValue(event.target.value);
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setEntities([...entities, await fetchSingleCharacter(nameInputValue)]);
    setNameInputValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={nameInputValue} type="text" placeholder="Type a name..." onChange={handleNameInput} />
        <button>Click me</button>
      </form>
      <div className="battle">
        {entities.map((item) => {
          return (
            <DisplayCard
              key={item.id}
              name={item.name}
              spriteFront={item.sprites.versions["generation-v"]["black-white"]["animated"]["front_default"]}
              stats={item.stats}
              type={item.types[0].type.name}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
