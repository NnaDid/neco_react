import React from 'react'
import { 
  Grid, GridItem, Image, Box, Heading, 
  Stack,Text, UnorderedList, ListItem, 
  HStack, VStack, Select, FormControl, 
  Input, Button, Link
} from '@chakra-ui/react'

import Logo from '../assets/neco_logo.svg' 
import { ChatIcon } from '@chakra-ui/icons'

const Years = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

function Home() {
  return (
    <Grid
        h='100vh'
        templateRows='repeat(2, 1fr)'
        templateColumns='repeat(2, 1fr)'
        gap={1/2}
        > 
        <GridItem colSpan={1/2} bg='#07bc0c88'  h='100vh' >
          <Stack boxSize='sm' style={{ margin:35 }}>
            <Box boxSize='sm'> 
              <Image src={Logo} boxSize='100px' alt='Neco Logo' />
              <Heading mt={10} as='h2' size='xl' color='#fff'>NECO RESULTS</Heading>
            </Box>

            <Box boxSize='sm' color='#fff'>
              <Text>How it works</Text>
              <UnorderedList>
                <ListItem>Select your examination year and examination type.</ListItem>
                <ListItem>Enter your Token.</ListItem>
                <ListItem>Enter your Registration number.</ListItem>
                <ListItem>Click on the "Check my result" button.</ListItem>
              </UnorderedList>
            </Box>

            
            <Box mt={40}>
                <HStack spacing={4}> 
                   <Box bg='#fff' 
                          borderRadius='50%' w={30} h={30} 
                          display='flex'
                          justifyContent='center' 
                          alignItems='center'
                    >
                      <ChatIcon fill='green' color='green'/> 
                   </Box>
                  <Text color='#fff'>Support mail support@neco.gov.ng</Text>
                </HStack>
            </Box>


          </Stack>

        </GridItem>

        <GridItem colSpan={3/2} bg='#fff'  h='100vh' >
            <Stack 
              display='flex'
              justifyContent='center' 
              alignItems='center'
              w = '100%' 
            > 
             <Box   h='90vh' w ='60%' margin='auto' mt='5vh'>
                   <VStack spacing={3}> 
                        <Heading>Check Result</Heading>                        
                         <Select variant='filled' placeholder='Examination Year'>
                            {  Years.map( (val, index) =>( <option value={val} key={index}> {val}</option>) )  }
                        </Select>

                        <Select variant='filled'>
                          <option disabled={true}>Examination Type</option>
                          <option value="ssce_int">SSCE INTERNAL</option>
                          <option value="ssce_ext">SSCE EXTERNAL</option>
                          <option value="bece">BECE</option>
                          <option value="ncee">NCEE</option>
                          <option value="gifted">GIFTED</option>
                       </Select>

                       <FormControl > 
                          <Input type='text' placeholder ="Token Eg (0000 0000 0000)" variant='filled'/> 
                      </FormControl>

                       <FormControl> 
                          <Input type='text' placeholder ="Registration Number" variant='filled' /> 
                      </FormControl>

                       <FormControl> 
                           <Button colorScheme='green' w= '100%'> Check Result </Button>
                      </FormControl>
                          <Text> or </Text>
                          <Text fontSize={12.5}> Don’t have a token to check your result? Purchase token with the button below</Text>
                       <FormControl> 
                           <Button colorScheme='blue' w= '100%'> Purchase Token </Button>
                      </FormControl>

                      <HStack>
                          <Text>Already have an account?</Text>
                          <Link href='#' color="blue.600"> Login here  </Link>
                      </HStack> 

                      <VStack>
                          <Link href='#' color="green.600"> Create Account  </Link>
                      </VStack>

                  </VStack>

                
            </Box>
                  

            </Stack>
        </GridItem> 
    </Grid>
  )
}

export default Home