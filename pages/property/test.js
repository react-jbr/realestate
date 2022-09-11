import React from 'react'
import Link from 'next/link';
import { Box, Flex, Text,Avatar } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';

const hai="hai"
const test = ({id,test:{price,rentFrequency},data1} ) => (
//const test = ({ test: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } } ) => (
   
 
                 <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >            
                 <Text fontWeight='bold' fontSize='lg'>
         "id:" {id} AED   "test:"   {price} {rentFrequency && `/${rentFrequency}`} 
         "data1:"     {data1.price} {data1.rentFrequency && `/${data1.rentFrequency}`}
        </Text>       
         </Flex>       
       
      )



export default test

export async function getServerSideProps () {
    const id=58
    const data1={
        price:1234,
        rentFrequency:"Low",
    };
   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    
  
  return {
    props: {
     id,test:data1,data1
    },
  };
};

  

