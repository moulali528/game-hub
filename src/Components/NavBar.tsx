import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import logo  from '../assets/logo.webp'
const NavBar:React.FC = () => {
  return (
    <div>
        <HStack>
            <Image src={logo} boxSize={'60px'}></Image>
            <input type="search" />
        </HStack>
    </div>
  )
}

export default NavBar
