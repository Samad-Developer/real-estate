import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import Banner from '@/components/Banner'
import { baseURL, fetchApi } from '@/utils/fetchAPI'
import Property from '@/components/Property'

async function getData() {
  const urlForSale = `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`;
  const urlForRent = `${baseURL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`;
  const propertyForSale = await fetchApi({ url: urlForSale })
  const propertyForRent = await fetchApi({ url: urlForRent })
  return {
    props: {
      propertyForSale: propertyForSale?.hits || [],
      propertyForRent: propertyForRent?.hits || [],
    }
  }
}

export default async function Home() {
  const { props } = await getData()
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        LinkName='/search?purpose=for-rent'
        imageUrl='http://cdnparap20.paragonrels.com/ParagonImages/Property/P2/LCBORMLS/65196/0/0/0/23f59df2e5c5de9dbc91acc8dcba1d52/0/96a84b29f9bcb01d0a7343054806609e/65196.JPG'
      />
      <Flex flexWrap='wrap' mt={10}>
        {props.propertyForRent && props.propertyForRent.map((property: {}) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        LinkName='/search?purpose=for-sale'
        imageUrl='http://cdnparap20.paragonrels.com/ParagonImages/Property/P2/LCBORMLS/65196/0/0/0/23f59df2e5c5de9dbc91acc8dcba1d52/0/96a84b29f9bcb01d0a7343054806609e/65196.JPG'
      />
      <Flex flexWrap='wrap' mt={10}>
        {props.propertyForSale && props.propertyForSale.map((property: {}) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}