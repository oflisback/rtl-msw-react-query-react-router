import { useQuery } from "@tanstack/react-query";

interface Pokemon {
  id: number;
  name: string;
}
async function getPikachu(): Promise<Pokemon> {
  const url = `https://pokeapi.co/api/v2/pokemon/pikachu`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
}

const usePikachu = () => {
  return useQuery({
    queryFn: getPikachu,
    queryKey: ["pikachu"],
  });
};

export default usePikachu;
