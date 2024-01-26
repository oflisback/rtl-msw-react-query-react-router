import { useLocation } from "react-router-dom";
import usePokemon from "./usePokemon";
const Root = () => {
  const location = useLocation();
  console.log("location: ", location);
  const { data: pokemonData } = usePokemon();

  return <div>{pokemonData ? pokemonData.name : "Loading"}</div>;
};

export default Root;
