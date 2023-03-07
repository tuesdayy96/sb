import React from "react";
import Header,{ HeaderProps } from "./Header";
import './Header.css'
import { Meta, Story } from "@storybook/react";

export default {
    title: "Components/Header",
    component: Header
}

const Template : Story<HeaderProps> = (args)=><Header{...args}/>

export const standard = Template.bind({});
standard.args=({});