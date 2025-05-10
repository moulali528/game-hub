import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import { odrder_by } from "./interface/gameInterface";
import { Dispatch, StateUpdater } from "preact/hooks";

interface SortSelectorProps {
  onSelectSortOrder: (selectedOrder: string) => void;
}

const SortSelector: React.FC<SortSelectorProps> = ({ onSelectSortOrder }) => {
  const sortOrders = [
    { value: "", label: "Revelence" },
    { value: "added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "released", label: "Release Date" },
    { value: "rating", label: "Average Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Releavence
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
