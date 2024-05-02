import { Text, TextProps } from "@chakra-ui/react"
import { BiCross, BiHeart, BiLike } from "react-icons/bi"
interface Props {
    rating: number
}
const GameRating = ({rating}: Props) => {

    const ratingMap: { [key: number]: TextProps } = {
      3: { children: <BiCross /> },
      4: { children: <BiLike /> },
      5: { children: <BiHeart /> },
    };

    if (rating < 3) return null
    return <Text {...ratingMap[rating]} />;
}

export default GameRating