import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import genres from "../data/genres";
import platforms from "../data/platforms";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const genre = genres.find(g => g.id === gameQuery.genreId)
  const platform = platforms.find((p) => p.id === gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as="h1" marginY={5} fontSize={"5xl"}>{heading}</Heading>;
};

export default GameHeading;
