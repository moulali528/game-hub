import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid/components/GameGrid";
import GenreGrid from "./components/GenreGrid/components/GenreGrid";
import { useState } from "preact/hooks";
import { Genre, odrder_by, Platform } from "./interface/gameInterface";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { GameQuery } from "./interface/gameInterface";

export function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asid main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px",
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"asid"} paddingX={5}>
            <GenreGrid
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingLeft={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              selectedSortOrder={gameQuery.selectedOrder}
              onSelectSortOrder={(selectedOrder) =>
                setGameQuery({ ...gameQuery, selectedOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}
