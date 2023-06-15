import React from "react";
import styled from "styled-components";

export const  Button= styled.button`
background-color: white;
color: gray;
margin-top 15px;
// padding: 15px 20px;
font-weight: 600;
font-size: 20px;
padding: 5px 0;
border: none;
`;
export default function AddTask(){

    return(
        <Button onClick={test}>+</Button>
    );
}
function test(){
    alert("button pressed");
}