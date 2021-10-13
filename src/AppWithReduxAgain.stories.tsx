/*
import React, {useState} from 'react';
import {AppWithReduxgain} from "./AppWithReduxAgain";
import {action} from "@storybook/addon-actions";
import {Provider} from "react-redux";
import {store} from "./store/storeagain";


export default {
    title: 'AppWithRedux Stories',
    component: AppWithReduxgain,
}


export const AppFormBaseTemplate = () => {
   return <Provider store = {store}> <AppWithReduxgain /> </Provider>
}


*/

import React from 'react';
import {Meta, Story} from "@storybook/react";
import {AppWithReduxgain} from "./AppWithReduxAgain";
import {AddItemForm, AddItemFormPropsType} from "./AddItemForm/AddItemForm";
import {action} from "@storybook/addon-actions";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProvider";


export default  {
    title: "AppWithRedux stories",
    component: AppWithReduxgain,
    decorators: [ReduxStoreProviderDecorator]
   } as Meta;


const Template: Story= () => <AppWithReduxgain  />;

export const AppWithReduxExample = Template.bind ({});





