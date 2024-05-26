import { SimpleGrid, Text } from "@chakra-ui/react";
import DefinationItems from "./DefinationItems";
import CriticScore from "./CriticScore";
import { Game } from "../entities/Game";

interface Props{
    game: Game
}

const GameAttributes = ({game}: Props) => {
  return (
    <SimpleGrid columns={2} as={"dl"}>
      <DefinationItems item={"Platforms"}>
        {game.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems item={"Metascore"}>
        <CriticScore score={game.metacritic} />
      </DefinationItems>
      <DefinationItems item={"Genres"}>
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems item={"Publishers"}>
        {game.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItems>
    </SimpleGrid>
  );
}

export default GameAttributes