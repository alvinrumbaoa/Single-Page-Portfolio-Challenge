import React,{useEffect} from "react"
import {Container ,Flex,  useColorMode , ChakraProvider ,useColorModeValue}  from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children})  => {
	return (
		<Flex bgColor="#FFF7F0"  direction="column" h="100vh">   
			   <Nav/>
				{children}
			   <Footer/>
		</Flex>
	)
}

export default Layout
