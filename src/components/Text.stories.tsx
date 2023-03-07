import React from "react";
import Text,{ TextProps, } from "./Text";
import { Meta, Story } from "@storybook/react";

export default {
    title :"Components/Text",
    component: Text,
    argTypes:{
        color:{control:'color'},
    },
} as Meta;

const Template : Story<TextProps> = (args)=><Text{...args}/>

export const standard = Template.bind({});
standard.args = ({text: "Design!", color: "black", size:"medium"})

export const bigSize = Template.bind({});
bigSize.args = ({text:"bigSize!", color:"#00ff00", size:"large"})