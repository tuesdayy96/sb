import React, {useState} from "react";
import './Gnb.css';
import menu from '../assets/menu.png';
import logo from '../assets/gnb-logo.svg';
import Menu from "./Menu";
import Text, { TextProps } from "./Text";

export interface GnbProps {
}

function Gnb({}:GnbProps){

    const [visibility,setVisibility] = useState(false);

    return <div className="gnb">

        <div className="gnb-top">
            <ul className="gnb-top-list">
                <li>
                    <a href='#!'>
                        <Text text="로그인" size="small"/>
                    </a>
                </li>
                <li>|</li>
                <li>
                    <a href='#!'>
                        <Text text="회원가입" size="small"/>
                    </a>
                </li>
                <li>|</li>
                <li>
                    <a href='#!'>
                        <Text text="지갑관리" size="small"/>
                    </a>
                </li>
                <li>|</li>
                <li>
                    <a>
                        <Text text="고객지원" size="small"/>
                    </a>
                </li>
                <li>
                    <select name="" id="" className="lang-select">
                        <option value="ko">kor</option>
                        <option value="en">eng</option>
                    </select>
                </li>
            </ul>
        </div>

        <div className="gnb-bottom">
            <div className="gnb-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="gnb-bottom-list">
                <ul className="gnb-bottom-main" onMouseOver={(e)=>{setVisibility(true)}} onMouseLeave={(e)=>{setVisibility(false)}}>
                    <li><Text text="거래소" size="medium"/>
                        {visibility && <Menu/>}    
                    </li>
                    <li><Text text="서비스" size="medium"/>
                        {visibility && <Menu/>}   
                    </li>
                    <li><Text text="제휴" size="medium"/>
                        {visibility && <Menu/>}
                    </li>
                </ul>
                <button style={{border:'none',background:'none'}}>
                    <img src={ menu } style={{width:'32px',height:'32px'}} alt='menu'/>
                </button>
            </div>
        </div>
    </div>
}

export default Gnb