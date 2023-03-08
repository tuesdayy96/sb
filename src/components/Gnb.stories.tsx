import React from "react";
import Gnb, { GnbProps } from "./Gnb";
import './Gnb.css'
import { Meta, Story } from "@storybook/react";

export default {
    title: "Components/Gnb",
    component: Gnb,
    decorators:[
        (Story) => (
            <div style={{width: '1500px',margin:'20px'}}>
                <Gnb/>
            </div>
        )
    ]
} as Meta

const Template : Story<GnbProps> = (args)=><Gnb {...args}/>

export const standard = Template.bind({});
standard.args=({});