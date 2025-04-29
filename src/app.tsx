import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button>Click me</Button>
      <Input placeholder='Basic usage' />

    </>
  )
}
