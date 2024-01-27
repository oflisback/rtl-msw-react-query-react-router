import { useLocation } from "react-router-dom";
import usePokemon from "./usePikachu";

const App = () => {
  // Use location but ignore data just to have a dependency towards react-router
  useLocation();
  // Use pokemon data from the network to have a dependency towards react-query
  const { data: pokemonData } = usePokemon();

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        fontSize: "48pt",
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      {pokemonData ? pokemonData.name : "Loading"}
    </div>
  );
};

export default App;
