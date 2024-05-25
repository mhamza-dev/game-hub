import { Menu, MenuList, MenuItem, Button, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import platforms from "../data/platforms";
import useGameQueryStore from "../store";


const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId)
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId)
  const { data, error } = usePlatforms();
    const platform = platforms.find((platform) => platform.id === selectedPlatformId)
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
