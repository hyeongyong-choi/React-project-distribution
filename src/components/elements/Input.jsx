import styled, { css } from 'styled-components';
import { a11yHidden } from 'styles/mixin';

function Input({
  value,
  placeholder,
  width,
  id,
  labelText,
  isHide = false,
  changeHandler = null,
}) {
  return (
    <FormInputContainer>
      <label htmlFor={id} className={isHide ? 'a11y-hidden' : ''}>
        {labelText}
      </label>
      <FormInput
        type="text"
        value={value}
        placeholder={placeholder}
        width={width}
        onChange={changeHandler}
        id={id}
      />
    </FormInputContainer>
  );
}

export default Input;

const FormInputContainer = styled.div`
  .a11y-hidden {
    ${a11yHidden}
  }
`;

const FormInput = styled.input`
  ${(props) => {
    return (
      props.type === 'text' &&
      css`
        font-size: 18px;
        width: ${(props) => props.width || '90%'};
        padding: 10px;
        margin: 10px;
        border: 1px solid #eeeeee;
        border-radius: 3px;
      `
    );
  }}
`;
