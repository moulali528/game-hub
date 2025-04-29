import { useState } from 'preact/hooks'
import { Grid, GridItem, Show } from '@chakra-ui/react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "asid main"`,
      }}>
        <GridItem area={'nav'} bg={'coral'}>Nav</GridItem>
        <Show above='lg'>
          <GridItem area={'asid'} bg={'gold'}>Asid</GridItem>
        </Show>
        <GridItem area={'main'} bg={'blue'}>Main</GridItem>
      </Grid>

    </>
  )
}
