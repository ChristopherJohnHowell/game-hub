import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface SortOrder {
  value: string;
  label: string;
}

interface Props {
  onSelectSortOrder: (sortOrder: SortOrder) => void;
  selectedSortOrder: SortOrder;
}

const OrderBySelector = ({
  onSelectSortOrder: onSelect,
  selectedSortOrder: selectedSortField,
}: Props) => {
  const sortOrders: SortOrder[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedSortField
          ? "Order By: " + selectedSortField.label
          : "Order By: Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value} onClick={() => onSelect(order)}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default OrderBySelector;
