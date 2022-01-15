import styled from 'styled-components'
import right from './images/right.png'

/*header*/
export const StyleInput = styled.input`
  width: 500px;
  height: 40px;
  font-size: 22px;
  border:none;
  border-bottom: 2px solid #ccc;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 2px 7px;

&::-webkit-input-placeholder {
  color: #ccc;
  font-size: 22px;
}

&:focus{
  outline: none;
  border-color: rgba(255, 192, 203, 0.8);
}`

export const StyleSpan =  styled.span`
  float:left;
  margin-right: 3px;
  width:50px;
  height:50px;
  background:url(${right});  
`

