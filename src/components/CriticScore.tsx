import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let badgeColor = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorScheme={badgeColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
