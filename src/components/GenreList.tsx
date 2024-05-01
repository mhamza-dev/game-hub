import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import resiseImgeUrl from "../services/reziseImage";

const GenreList = () => {
  const { data: genres, isLoading, error} = useGenres();
  if (error) return null
  if (isLoading) return <Spinner />;
  return (
    <List paddingY={"5px"}>
      {genres.map((gen) => (
        <ListItem key={gen.id}>
          <HStack>
            <Image boxSize={"32px"} borderRadius={8} src={resiseImgeUrl(gen.image_background)} />
            <Text fontSize={"lg"}>{gen.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
