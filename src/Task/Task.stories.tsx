import React, {useState} from 'react';
import {Task} from "./Task";
import {action} from "@storybook/addon-actions";
import {Provider} from "react-redux";
import {store} from "../store/store";

export default {
    title: 'Task Stories',
    component: Task,
}
const callback = action("Task appeared")

export const TaskFormBaseTemplate = () => {
  return<Provider store={store}><Task  taskId={"1"} todolistId={"todolistId1"}/></Provider>
}



