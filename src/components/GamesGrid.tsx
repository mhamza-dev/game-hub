import { SimpleGrid } from "@chakra-ui/layout";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GamesGrid = () => {
  const { games, error } = useGames();

  console.log(games)
  console.log(error);

  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10} padding={'10px'}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GamesGrid;
