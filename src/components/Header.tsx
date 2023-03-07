import React, {useState} from "react";
import './Header.css';
import menu from '../assets/menu.png';
import box from '../assets/box.png'
import Menu from "./Menu";

export interface HeaderProps {

}

function Header({}:HeaderProps){
    const [visibility,setVisibility] = useState(true);
    return <div className="header">
        <div className="nav_top">
            <ul className="nav_top_list">
                <li>
                    <a href='#!'>로그인</a>
                </li>
                <li>|</li>
                <li>
                    <a href='#!'>회원가입</a>
                </li>
                <li>|</li>
                <li>
                    <a href='#!'>지갑관리</a>
                </li>
                <li>|</li>
                <li>
                    <a href='#!'>고객지원</a>
                </li>
                <li>
                    <select name="" id="" className="lang_select">
                        <option value="ko">kor</option>
                        <option value="en">eng</option>
                    </select>
                </li>
            </ul>
        </div>

        <div className="nav_bottom">
            <div className="logo_title">
                <img src={box} alt="logo" />
                <span className="header_title">BITSTOA</span>
            </div>
            <div className="nav_bottom_list">
                <ul className="nav_bottom_main" onMouseOver={(e)=>{setVisibility(true)}} onMouseLeave={(e)=>{setVisibility(false)}}>
                    <li>거래소
                        {visibility && <Menu/>}    
                    </li>
                    <li>서비스
                        {visibility && <Menu/>}   
                    </li>
                    <li>제휴
                        {visibility && <Menu/>}
                    </li>
                </ul>
                <button style={{border:'none',background:'none'}}>
                    <img src={menu} style={{width:'32px',height:'32px'}} alt='menu'/>
                </button>
            </div>
        </div>
    </div>
}

export default Header
