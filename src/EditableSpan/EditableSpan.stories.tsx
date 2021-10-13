import React, {useState} from 'react';
import {EditableSpan} from "./EditableSpan";
import {action} from "@storybook/addon-actions";

export default {
    title: 'EditableSpan Stories',
    component: EditableSpan,
}
const callback = action("EditableSpan changed new title")

export const EditableSpanFormBaseTemplate = () => <EditableSpan value={"Add new title"}  onChange={callback}/>



