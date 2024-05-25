import { Menu, MenuList, MenuItem, Button, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const SelectedOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSelectSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSelectedOrder = sortOrders.find(
    (order) => order.value === SelectedOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSelectedOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortorder) => (
          <MenuItem
            key={sortorder.value}
            onClick={() => setSelectSortOrder(sortorder.value)}
            value={sortorder.value}
          >
            {sortorder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
