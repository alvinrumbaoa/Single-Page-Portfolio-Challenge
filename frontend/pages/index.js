import {Box, Heading, Image, Text,HStack, VStack, Link, Button,Container, useColorModeValue, Flex, GridItem,  Grid} from '@chakra-ui/react'
import Head from 'next/head'
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'

const MotionFlex = motion(Flex)
export default function Home() {
  
  const [slideLeft, setSlideLeft] = React.useState(0);
  const sliderWidth = 1900;
  const images = [
    "/images/image-slide-1.jpg",
    "/images/image-slide-2.jpg",
    "/images/image-slide-3.jpg",
    "/images/image-slide-4.jpg",
   "/images/image-slide-5.jpg",
    ]; 

    const moveRight = () => {
      const el = document.getElementById(`hscroll`);
      setSlideLeft((el.scrollLeft += 500));
    };
  
    const moveLeft = () => {
      const el = document.getElementById(`hscroll`);
      setSlideLeft((el.scrollLeft -= 500));
    };
  

  return (

        <Flex  align="center" direction="column" > 
          <Head>
            <title>Alvin Rumbaoa | Front End Web Developer | Orange County, California </title>
            <meta name="description" content="My Name is Alvin Rumbaoa, Web Designer and Web Developer from California" />
	        	<meta name="keywords" content="HTML, CSS, JavaScript, Chakra UI, Next JS, Web Developer, Frontend Developer, California, Orange county, portfolio"/>
            <link rel="icon" href="/favicon.ico" />
          </Head>	
          <Heading fontSize={{sm:"32px",md:"40px",lg:"56px"}} fontWeight="900">Design Solution made easy</Heading>
          <Text w={{sm:"300px",lg:"600px"}} fontSize={{sm:"17px",md:"18px",lg:"19px"}} color="#7A746E" textAlign="center" m={4}> With over two years of experience in various design disciplines, I’m your one-stop shop for your design needs.</Text>

          <Grid  h={{sm:"100%",lg:'300px'}} w={{md:"100%",lg:"70%"}} templateRows='repeat(2, 1fr)' templateColumns={{sm:'repeat(2, 1fr)', lg:'repeat(6, 1fr)'}} m={4} gap={3}>
            <GridItem  p={2}  borderRadius={5} rowSpan={{sm:1,md:1,lg:2}} colSpan={2} bg='#755CDE' direction='row'  _hover={{bg:"#000000"}}><Image ml={{sm:200,lg:280 }}p={2} src="/images/Graphic Design.png" height={{sm:"100" ,lg:"180" }} alignContent=""/><Text fontSize="1.4em" mt={{sm:10,lg:150}} p={2} color="white" fontWeight="800" justify="flex-end" alignItems="flex-end">Graphic Design</Text></GridItem>
            <GridItem  p={2} borderRadius={5} colSpan={1} bg='#F6A560' _hover={{bg:"#74746E"}}><Image p={2}  ml={120}  src="/images/ui.png" height="70" justify="flex-end"/><Text mt={20} color="white" fontWeight="900" fontSize="lg">UX/UI</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={1} bg='#F39E9E' _hover={{bg:"#74746E"}}><Image p={2} ml={120} src="/images/apps.svg" height="70"  justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Apps</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={2} bg='#61C4B7' _hover={{bg:"#74746E"}}><Image p={2}  ml={250} src="/images/photo.png"  height="70"justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Photography</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={2} bg='#EB7565' _hover={{bg:"#74746E"}}><Image p={2}  ml={280} src="/images/ illustration.png"  height="70" justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Illustrations</Text> </GridItem>
            <GridItem p={2} borderRadius={5} colSpan={2} bg='#552049' _hover={{bg:"#74746E"}}><Image p={2}  ml={280} src="/images/motion.png"  height="70" justify="flex-end"/><Text mt={20} color="white" fontWeight="900">Motion Graphics</Text> </GridItem>
          </Grid>

          <Flex mt={{sm:20, md:50, lg:300}} display="flex" justify="space-around" align={{sm:"center"}} direction={{sm:"column" ,md:"column",lg:"row" }}>
            <MotionFlex whileHover={{ scale: 1.1}}  whileTap={{ scale: 0.9 }} >
               <Image  justify={{sm:"center"}} src="/images/alvin.png" h={{sm:"300",md:"400",lg:"410"}}  />
            </MotionFlex> 	
            <Flex w={{sm:"100%",lg:"30%"}} display="flex" align={{sm:"center", lg:"start"}}justify="center" direction="column">
              <Heading mt="10" textAlign={{sm:"center", lg:"start"}}fontStyle="bold">I’m Alvin, and I’d love to work on your next project</Heading>
              <Text mt={7} textAlign={{sm:"center", lg:"start"}} color="#7A746E">I love working with others to create beautiful design solutions. I’ve designed everything from brand illustrations to complete mobile apps. I’m also handy with a camera!</Text>
              <Button mt={7} p={6} w="228px" h="56px" borderRadius="30px" color="white" bg="#EB7565" _hover={{ bg: '#F6A560' }} >Free Consultation </Button>
            </Flex>
          </Flex>

          <Heading mt={10} fontWeight="800"p={22}>My Work</Heading>
             

								<HStack id={`hscroll`}
								w="full"
								pb={22}
								overflowX="hidden"
								spacing={8}
								scrollSnapType="x mandatory"
								position="relative"
								zIndex="docked"
               
								>
								{images.map((src) => (
									<Image
									key={src}
									src={src}
									rounded="md"
									shadow="lg"
									h={80}
									scrollSnapAlign="center"
									maxWidth="initial"
									/>
								))}
								</HStack >
                <HStack  p={22} justify="center">
               
                {slideLeft > 0 ? (
               
                <ArrowBackIcon onClick={moveLeft} p={2} w={10} h={10} bg="#000000" _hover={{bg:"#755CDE"}} color="white" borderRadius="170px" /> 
               
              
                 ) : (
                  <div />
                )}
                 {slideLeft < sliderWidth ? (
                  <ArrowForwardIcon onClick={moveRight} p={2} w={10} h={10} bg="#000000" _hover={{bg:"#755CDE"}} color="white" borderRadius="170px"/>
                  ) : (
                    <div />
                  )}
      	  </HStack>
          <Flex mt={20} p={10} w={{sm:"500px", lg:"1110px" }} h="320px" display="flex" bg="#000000" justify="space-between" align="center" direction={{sm:"column",lg:"row"}}>
            <Box align={{sm:"center"}} w={{sm:"100%",lg:"50%"}}>
              <Heading align={{sm:"center",lg:"start"}} color="white">Book a call with me</Heading>
              <Text mt={3} align={{sm:"center", lg:"start"}} color="white" >I’d love to have a chat to see how I can help you. The best first step is for us to discuss your project during a free consultation. Then we can move forward from there.</Text>
            </Box>
            <Button p={6} w="228px" h="56px" borderRadius="30px" bgColor="#EB7565" _hover={{bg:'#F6A560'}}color="#FFF7F0">Free Consultation</Button>
          </Flex>
         
        </Flex>
       
  )
}
