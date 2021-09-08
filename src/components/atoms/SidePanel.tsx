import { Flex } from '@chakra-ui/layout';
import React from 'react';

export interface SidePanelProps {
  /**
   * Objects to render in pabel
   */
  children?: any;
}

/**
 * Primary UI component for user interaction
 */
export const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return <Flex>{children}</Flex>;
};
