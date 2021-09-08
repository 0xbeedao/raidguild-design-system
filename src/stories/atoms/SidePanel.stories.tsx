import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Center, Image, Spacer } from '../..';
import season2 from '../../assets/images/Season2-DAO-02b.png';
import { SidePanel, SidePanelProps } from '../../components/atoms/SidePanel';
export default {
  title: 'Components/Atoms/SidePanel',
  component: SidePanel,
  argTypes: {
    width: { control: 'number' },
  },
} as Meta;

const Template: Story<SidePanelProps> = (args) => <SidePanel {...args} />;

export const WithLogoLeft = Template.bind({});
WithLogoLeft.args = {
  children: (
    <SidePanel>
      <Center top="50%" pointerEvents="none" z-index="0">
        <Image
          src={season2}
          alt="season 2 logo"
          max-width="100px"
          height="auto"
        />
      </Center>
      <Spacer />
    </SidePanel>
  ),
};

export const WithLogoRight = Template.bind({});
WithLogoRight.args = {
  children: (
    <SidePanel>
      <Spacer />
      <Center top="50%" pointerEvents="none" z-index="0">
        <Image
          src={season2}
          alt="season 2 logo"
          max-width="100px"
          height="auto"
        />
      </Center>
    </SidePanel>
    // <Flex>
    //   <Spacer />
    //   <Image
    //     src={season2}
    //     alt="season 2 logo"
    //     max-width="100px"
    //     height="auto"
    //   />
    // </Flex>
  ),
};

export const Empty = Template.bind({});
Empty.args = {};
