import React from 'react';
import './Text.css'

export interface TextProps {
  text?:string;
  color?:string;
  size?:"small" | "medium" | "large";
  backgroundColor?:string;
}

// 텍스트입니다.
const Text=({text, color, size, backgroundColor}: TextProps)=>{
  return <span className={`text-${size}`} style={{color:color, backgroundColor:backgroundColor}}>{text}</span>
}

export default Text;

Text.defaultProps = {
 color: "black",
 font:"16px",
 size:"medium",
 backgroundColor:"default"
}