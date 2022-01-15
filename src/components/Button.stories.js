import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  text: 'default',
  theme: 'BTN_DEFAULT',
  handleClick: (e) => alert(e.target.className),
  updatedAt: new Date(),
};

export const Clicked = Template.bind({});
Clicked.args = {
  ...Default.args,
  text: 'clicked',
  theme: 'BTN_CLICKED',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  text: 'disabled',
  theme: 'BTN_DISABLED',
  handleClick: (e) => e.stopPropagation,
};
