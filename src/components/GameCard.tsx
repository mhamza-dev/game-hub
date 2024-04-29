import { Card, CardBody } from "@chakra-ui/card";
import { Game } from "../hooks/useGames";
import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import PlatformIcons from "./PlatformIcons";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={{ sm: "sm", md: "md", lg: "lg", "2xl": "2xl" }}>
          {game.name}
        </Heading>
        <PlatformIcons platforms={game.parent_platforms.map(p => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
