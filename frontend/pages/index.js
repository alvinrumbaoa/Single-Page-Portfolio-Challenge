import {Box, Heading, Text, Container, useColorModeValue, Flex,  Grid} from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {



  return (
        <Flex  align="center" direction="column" h="100vh"> 
          <Heading fontSize="56px" fontStyle="bold">Design Solution made easy</Heading>
          <Text w="500px" fontSize="18px" color="#7A746E" textAlign="center" m={4}> With over ten years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>
        </Flex>
  )
}
