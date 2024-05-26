import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpendableText = ({ children }: Props) => {
  const [expended, setExpended] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit) + "... ";

  return (
    <Text>
      {expended ? children : summary}{" "}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        marginLeft={2}
        onClick={() => setExpended(!expended)}
      >
        {expended ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpendableText;
