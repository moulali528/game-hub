import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";

export function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "asid main"`,
        }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"asid"}>Asid</GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}
