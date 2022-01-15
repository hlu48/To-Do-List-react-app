/*base*/
import styled from "styled-components"
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  body{
    background:#f5f5f5;
  }
`

export const StyleP = styled.p`
  margin: 10px;
  height: 100px;
  text-align: center;
  color: pink;
  line-height: 100px;
  font-size: 80px;

`

export const StyleDiv = styled.div`
  position: relative;
  width: 600px;
  margin: 0 auto;
  box-shadow:
    5px 0px 10px -5px #ccc,    //left shadow
    -5px 0px 10px -5px #ccc,   //right shadow
    0px 5px 5px -5px #ccc;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`

export const StyleTop =styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;

`

export const StyleBottom = styled.div`
  position: absolute;
  left: 6px;
  width: 585px;
  height: 7px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
  box-shadow: 0 1px 4px #ccc inset;
  background-color: white;

  div{
    position: absolute;
    left: 6px;
    top: 8px;
    width: 570px;
    height: 7px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 2px 3px #ccc;
    box-shadow: 0 1px 4px #ccc inset;
    background-color: white;

    

  }
`
