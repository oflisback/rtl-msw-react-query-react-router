import { useQuery } from "@tanstack/react-query";

interface Pokemon {
  id: number;
  name: string;
}
async function getPokemon(): Promise<Pokemon> {
  const url = `https://pokeapi.co/api/v2/pokemon/ditto`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    const pokemonData: Pokemon = await response.json();
    return pokemonData;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}

const usePokemon = () => {
  return useQuery({
    queryFn: getPokemon,
    queryKey: ["asdf"],
  });
};

export default usePokemon;
