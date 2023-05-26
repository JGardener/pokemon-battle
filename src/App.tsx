import { useState } from "react";

import { DisplayCard } from "./components/DisplayCard/DisplayCard";

const App = () => {
	const [nameInputValue, setNameInputValue] = useState<string>("");
	const [entities, setEntities] = useState<any[]>([]);

	const queryString = nameInputValue.toLowerCase();
	const fetchURL = `https://pokeapi.co/api/v2/pokemon/${queryString}/`;

	const fetchEntity = async () => {
		const response = await fetch(fetchURL);
		const data = await response.json();
		setEntities([...entities, data]);
		setNameInputValue("");
	};

	return (
		<>
			<div>
				<input
					value={nameInputValue}
					type="text"
					placeholder="Type a name..."
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							fetchEntity();
						}
					}}
					onChange={(e) => {
						setNameInputValue(e.target.value);
					}}
				/>
				<button onClick={fetchEntity}>Click me</button>
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
