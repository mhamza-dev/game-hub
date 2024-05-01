import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/image";
import { Heading, HStack } from "@chakra-ui/layout";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import resizeImgeUrl from "../services/resizeImage";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card>
      <Image src={resizeImgeUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={{ sm: "sm", md: "md", lg: "lg", "2xl": "2xl" }}>
          {game.name}
        </Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
