import { HStack, Image, Input } from '@chakra-ui/react'
import React from 'react'
import logo  from '../assets/logo.webp'
const NavBar:React.FC = () => {
  return (
    <div>
        <HStack>
            <Image src={logo} boxSize={'60px'}></Image>
            <Input placeholder='Basic usage'/>
        </HStack>
    </div>
  )
}

export default NavBar
