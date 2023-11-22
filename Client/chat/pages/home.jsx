// home.js
import React from 'react'

import { useNavigate } from "react-router-dom"

import { Container, Box, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Signup from '../components/authentication/signup'
import Login from '../components/authentication/login'
const Home = () => {

  const navigate = useNavigate() 
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("userInfo"))
  
    if(user){

      navigate('/chats')


    }
  },[navigate])
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={'white'}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg" // corrected typo here
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work sans" color="black">
          {' '}
          {/* corrected fontSize value */}
          Hello
        </Text>
      </Box>
      <Box
        color="black"
        bg="white"
        w="100%"
        p={4}
        borderRadius="lg"
        borderWidth="1px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Home
