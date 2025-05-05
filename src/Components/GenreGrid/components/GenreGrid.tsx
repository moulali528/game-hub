import React from "react";
import useGenre from "../../../hooks/useGenre";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageURL from "../../../services/image-url";
import { Genre } from "../../../interface/gameInterface";

interface GenreGridProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreGrid: React.FC<GenreGridProps> = ({
  selectedGenre,
  onSelectGenre,
}) => {
  const { data: genres, isLoading, error } = useGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem paddingY={"5px"}>
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize={"35px"}
              borderRadius={8}
            />
            <Button
              variant={"link"}
              fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
              key={genre.id}
              fontSize={"lg"}
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreGrid;
