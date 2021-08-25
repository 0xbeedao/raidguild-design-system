import React from 'react';
import { Flex, Heading, ChakraText, Image } from '../..';

export interface CardProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
  text: string;
}

export const Card: React.FC<CardProps> = ({ title, imageSrc, text, imageAlt }) => (
  <Flex
    direction='column'
    alignItems='center'
    justifyContent='space-evenly'
    py='2rem'
    px='1.5rem'
    bg='black'
    borderTop='2px solid'
    borderColor='red'
  >
    <Heading
      variant='labels'
      fontSize={{ base: '16px' }}
      textAlign='center'
      mb={3}
    >
      {title}
    </Heading>

    <Image src={imageSrc} alt={imageAlt || imageSrc} my='.5rem' />

    <ChakraText
      variant="textTwo"
      fontSize={{ base: '16px' }}
      textAlign='left'
    >
      {text}
    </ChakraText>
  </Flex>
);;
