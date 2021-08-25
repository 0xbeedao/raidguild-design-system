import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Card, CardProps } from '../../src';
import { styled } from '../..';

export default {
  title: 'Components/Atoms/Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const WithHeading = Template.bind({});
WithHeading.args = {
  text: 'CardTitle',
};

const Wrapper = styled('div')`
  display: grid;
  grid-template-rows: 40% 40%;
  grid-template-columns: 40% 40%;
  grid-gap: 4em;
`;

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dignissimos ut voluptate eveniet? Sunt totam, quidem, nobis corrupti voluptatum aliquam expedita voluptas alias laborum eos dolor esse fugiat? Explicabo, tenetur.';

const images = [
  "https://res.cloudinary.com/saimano/image/upload/v1622036153/RaidGuild/icons/red/consultations_lr6ef4.png",
  "https://res.cloudinary.com/saimano/image/upload/v1622036154/RaidGuild/icons/red/designsprints__one_zuzzjt.png",
  "https://res.cloudinary.com/saimano/image/upload/v1622036154/RaidGuild/icons/red/fullstackdev_pvshh4.png",
  "https://res.cloudinary.com/saimano/image/upload/v1622036155/RaidGuild/icons/red/marketing_ge6ikg.png",
];

const cardProps = Array.from(new Array(4), (_, i) => ({
  title: `Card ${i}`,
  text: lorem,
  imageSrc: images[i],
}));

const MultipleTemplate: Story<CardProps> = () => (
  <Wrapper>
    {cardProps.map((props) => <Card key={props.title} {...props} />)}
  </Wrapper>
);
export const Multiple = MultipleTemplate.bind({});
