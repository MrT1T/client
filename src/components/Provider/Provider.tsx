import React, { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

interface IProps {
  children: React.ReactNode;
}

export const Provider: FC<IProps> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};
