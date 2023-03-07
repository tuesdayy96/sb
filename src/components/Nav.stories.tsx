import React from "react";
import Nav,{NavProps} from "./Nav";
import { Meta, Story } from "@storybook/react";

export default {
    title: "Components/Nav",
    component: Nav,
} as Meta;

const Template : Story<NavProps> = (args)=><Nav{...args}/>

export const standard = Template.bind({});
standard.args=({
    textProps:{
        text:"good",
        color:"black",
        size:"medium"
    },
    textProps2:{
        text:"soso",
        color:"black",
        size:"medium"
    },
    textProps3:{
        text:"bad",
        color:"black",
        size:"medium"
    }
})