/*item*/
import styled from 'styled-components'


export const StyleLi = styled.li`
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;

  label {
    float: left;
    cursor: pointer;
  }
  label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }
  button {
    float: right;
    display: none;
    margin-top: 3px;
  }
  li:before {
    content: initial;
  }
  
  li:last-child {
    border-bottom: none;
  }
  button{
    margin: 10px auto;
    width: 15px;
    height: 15px;
    border: 1px solid white;
    cursor: pointer;
  
    // delete button 
    background: linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 2px),
      rgba(255, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) calc(50% + 2px),
      rgba(0, 0, 0, 0) 100%
    ), linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 2px),
      rgba(255, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) calc(50% + 2px),
      rgba(0, 0, 0, 0) 100%
    );
  } 
`

export const StyleSpan =styled.span`
  float: right;
  margin-right: 10px;
  cursor: pointer;
`


