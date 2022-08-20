import {Box, Heading, Image, Text, Button, useColorModeValue, Flex, GridItem,  Grid} from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";

const MotionFlex = motion(Flex)
export default function Home() {



  return (

        <Flex  align="center" direction="column" > 
          <Head>
            <title>Alvin Rumbaoa | Front End Web Developer | Orange County, California </title>
            <meta name="description" content="My Name is Alvin Rumbaoa, Web Designer and Web Developer from California" />
	        	<meta name="keywords" content="HTML, CSS, JavaScript, Chakra UI, Next JS, Web Developer, Frontend Developer, California, Orange county, portfolio"/>
            <link rel="icon" href="/favicon.ico" />
          </Head>	
          <Heading fontSize={{sm:"32px",md:"40px",lg:"56px"}} fontWeight="900">Design Solution made easy</Heading>
          <Text w="600px" fontSize={{sm:"17px",md:"18px",lg:"19px"}} color="#7A746E" textAlign="center" m={4}> With over two years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>

          <Grid  h='200px' w={{md:"100%",lg:"50%"}} templateRows='repeat(2, 1fr)' templateColumns={{sm:'repeat(2, 1fr)', lg:'repeat(6, 1fr)'}} m={4} gap={3}>
            <GridItem p={2}  borderRadius={5} rowSpan={{sm:1,md:1,lg:2}} colSpan={2} bg='#755CDE' direction='row' justify="space-between"><Image p={2} ml={120} src="/images/Graphic Design.png" width="180" height="180" justify="flex-end"/><Text mt={120} p={2} color="white" fontWeight="900" justify="flex-end" alignItems="flex-end">Graphic Design</Text></GridItem>
            <GridItem p={2} borderRadius={5} colSpan={1} bg='#F6A560' ><Image p={2}  ml={61}  src="/images/ui.png" width="55" height="55" justify="flex-end"/><Text mt={20} color="white" fontWeight="900" fontSize="lg">UX/UI</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={1} bg='#F39E9E' ><Image p={2} ml={61} src="/images/apps.svg" width="55" height="55"  justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Apps</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={2} bg='#61C4B7' ><Image p={2}  ml={140} src="/images/photo.png" width="55" height="55"justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Photography</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={2} bg='#EB7565' ><Image p={2}  ml={160} src="/images/ illustration.png" width="55" height="55" justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Illustrations</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={2} bg='#552049' ><Image p={2}  ml={160} src="/images/motion.png" width="55" height="55" justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Motion Graphics</Text> </GridItem>
          </Grid>
          <Flex m={20} display="flex" justify="space-around" direction="row" mt={300}>
            <MotionFlex whileHover={{ scale: 1.1}}  whileTap={{ scale: 0.9 }} >
               <Image src="/images/alvin.png" h="440" w="440" />
            </MotionFlex> 	
            <Flex w="30%" display="flex" justify="center" direction="column">
              <Heading fontStyle="bold">I’m Alvin, and I’d love to work on your next project</Heading>
              <Text mt={5} color="#7A746E">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</Text>
              <Button mt={5} p={6} w="228px" h="56px" borderRadius="30px" color="white" bg="#EB7565" _hover={{ bg: '#F6A560' }} >Free Consultation </Button>
            </Flex>
          </Flex>
        </Flex>
  )
}
