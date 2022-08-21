import React from 'react'

import { Flex, Button, Link, Text, Heading, Image, Container, HStack, VStack, Stack, Grid } from '@chakra-ui/react'
const Footer = () => {
	return (
			<Flex mt={20} p={10} direction="row" justify="space-between">
				<Link href="/"><Image src="/images/logo.svg" /></Link>
				<Button p={6} w="228px" h="56px" borderRadius="30px" bgColor="#030303" _hover={{bg:'#755CDE'}}color="#FFF7F0">Free Consultation</Button>
			</Flex>
	)
}

export default Footer
