import React from 'react';
import Button from './Button';


export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: '1',
    title: 'default',
    state: 'BTN_DEFAULT',
    updatedAt: new Date(2021, 0, 1, 9, 0),
};

export const Clicked = Template.bind({});
Clicked.args = {
    ...Default.args,
    title : "clicked",
    state: 'BTN_CLICKED',
};

export const Disabled = Template.bind({});
Disabled.args = {
    ...Default.args,
    title:"disabled",
    state: 'BTN_DISABLED',
};