import { Menu, MenuList, MenuItem, Button, MenuButton } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedOrder: (value: string) => void;
  SelectedOrder: string;
}

const SortSelector = ({ onSelectedOrder, SelectedOrder }: Props) => {
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
            onClick={() => onSelectedOrder(sortorder.value)}
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
