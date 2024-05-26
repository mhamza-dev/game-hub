import { useParams } from "react-router-dom"
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpendableText from "../components/ExpendableText";

const GameDetailPage = () => {
const {slug} = useParams()
   const {data: game, isLoading, error} = useGame(slug!);
   if (error) throw error;
   if (isLoading) return <Spinner />
  return (
    <>
      <Heading>{game?.name}</Heading>
      {game && <ExpendableText>{game.description_raw}</ExpendableText>}
    </>
  );
}

export default GameDetailPage