import { render } from 'preact'
import './index.css'
import { App } from './app.tsx'
import { ChakraProvider } from '@chakra-ui/react'


render(
<ChakraProvider><App /> </ChakraProvider>, document.getElementById('app')!)
