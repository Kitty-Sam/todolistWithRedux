/*
import React, {useState} from 'react';
import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";

export default {
    title: 'AddItemForm Stories',
    component: AddItemForm,
}


const callback = action("AddItem added new title")

export const AddItemFormBaseTemplate = () => <AddItemForm addItem={callback}/>

*/

import React from 'react';
import {AddItemForm, AddItemFormPropsType} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Meta, Story} from "@storybook/react";

export default  {
    title: "AddItemForm stories",
    component: AddItemForm,
    argTypes: {
        onClick: {
            description: "Button inside from clicked"
        }
    },
} as Meta;

const Template: Story<AddItemFormPropsType> = (args) => <AddItemForm {...args} />;

export const AddItemFormExample = Template.bind ({});

AddItemFormExample.args = {
    addItem: action ("Button inside from clicked")
}




