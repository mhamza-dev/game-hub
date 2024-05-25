import { Heading } from "@chakra-ui/react";
import genres from "../data/genres";
import platforms from "../data/platforms";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId)
  const genre = genres.find((g) => g.id === genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = platforms.find((p) => p.id === platformId);
  
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as="h1" marginY={5} fontSize={"5xl"}>{heading}</Heading>;
};

export default GameHeading; 
