import { render } from 'preact'
import { App } from './app.tsx'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theam.ts'


render(
<ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode}/><App /> </ChakraProvider>, document.getElementById('app')!)
