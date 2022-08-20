import React,{useEffect} from "react"
import {Container ,Flex,  useColorMode , ChakraProvider ,useColorModeValue}  from '@chakra-ui/react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children})  => {
	return (
		<Flex bgColor="#FFF7F0"  direction="column" >   
			   <Nav/>
				{children}
			   <Footer/>
		</Flex>
	)
}

export default Layout
