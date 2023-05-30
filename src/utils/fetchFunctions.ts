// Fetch a single character from the API.
export const fetchSingleCharacter = async (queryString: string) => {
  const fetchURL = `https://pokeapi.co/api/v2/pokemon/${queryString}/`;
  const response = await fetch(fetchURL);
  const data = await response.json();
  return data;
};
