import React from "react";
import useGenre from "../../../hooks/useGenre";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import getCroppedImageURL from "../../../services/image-url";

const GenreGrid: React.FC = () => {
  const { data, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize={"35px"}
              borderRadius={8}
            />
            <Text key={genre.id} fontSize={"lg"}>
              {genre.name}
            </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreGrid;
