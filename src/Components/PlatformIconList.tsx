import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platforms } from "../interface/gameInterface";
import { IconType } from "react-icons";

interface PlatformIconListProps {
  platforms: Platforms[];
}
const PlatformIconList: React.FC<PlatformIconListProps> = ({ platforms }) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={"5px"}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} margin={"5px"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
