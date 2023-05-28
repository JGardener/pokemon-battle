import { useState } from "react";

import { DisplayCard } from "./components/DisplayCard/DisplayCard";
import { fetchSingleCharacter } from "./utils/fetchFunctions";

const App = () => {
  const [nameInputValue, setNameInputValue] = useState<string>("");
  const [entities, setEntities] = useState<any[]>([]);

  const handleSubmit = async () => {
    setEntities([...entities, await fetchSingleCharacter(nameInputValue)]);
    setNameInputValue("");
  };

  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            value={nameInputValue}
            type="text"
            placeholder="Type a name..."
            onChange={(e) => {
              setNameInputValue(e.target.value);
            }}
          />
          <button onClick={handleSubmit}>Click me</button>
        </form>
        <div>
          {entities.map((item) => {
            return <DisplayCard key={item.id} name={item.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
