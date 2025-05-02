import { HStack, Image, Input } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar: React.FC = () => {
  return (
    <HStack justifyContent={"space-between"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <Input placeholder="Basic usage" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
