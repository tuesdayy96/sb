import React from "react";
import './Nav.css'
import Text, {TextProps} from "./Text";

export interface NavProps {
    textProps:TextProps,
    textProps2:TextProps,
    textProps3:TextProps
}

function Nav({textProps, textProps2, textProps3}:NavProps){

    return (
        <ul className="Nav">
            <li className="Nav_list">
                <a href="#!">
                    <Text {...textProps}/>
                </a>
            </li>
            <li className="Nav_list">
                <a href="#!">
                    <Text {...textProps2}/>
                </a>
            </li>
            <li className="Nav_list">
                <a href="#!">
                    <Text {...textProps3}/>
                </a>
            </li>
        </ul>
    )
}

export default Nav