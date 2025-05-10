import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  selectedSortOrder: string;
  onSelectSortOrder: (selectedOrder: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({
  selectedSortOrder,
  onSelectSortOrder,
}) => {
  const sortOrders = [
    { value: "", label: "Revelence" },
    { value: "added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "rating", label: "Average Rating" },
  ];

  const currentSortValue = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );
  console.log("currentSortValue---", selectedSortOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortValue?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            key={sortOrder.label}
            value={sortOrder.value}
            onClick={() => onSelectSortOrder(sortOrder.value)}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
