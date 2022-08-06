
import styled from "styled-components";
import { css } from "styled-components";


function Input({value,placeholder,width}) {
  return <FormInput type='text' value={value} placeholder={placeholder} width={width}/>
          
}

export default Input;

const FormInput = styled.input`
      ${(props) => {
      return(
      props.type === "text" &&
      css`  
      font-size: 18px;
      width : ${(props) => props.width || '90%'};
      padding: 10px;
      margin: 10px;
      border: 1px solid #eeeeee;
      border-radius: 3px;
      ` ) }}`