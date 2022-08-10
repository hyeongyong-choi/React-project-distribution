import styled from 'styled-components';
import { a11yHidden } from 'styles/mixin';

const TodoTextarea = (props) => {
  const { todoLabel, todoContent, isHide , changeHandler} = props;

  return (
    <TodoTextareaContainer>
      <label htmlFor="todo-textarea" className={isHide ? 'a11y-hidden' : ''}>
        {todoLabel}
      </label>
      <StyledTextarea
        id="todo-textarea"
        name="content"
        rows="10"
        cols="50"
        placeholder="내용을 입력해주세요. (2~200자)"
        defaultValue={todoContent}
        onChange={changeHandler}
      ></StyledTextarea>
    </TodoTextareaContainer>
  );
};

export default TodoTextarea;

const TodoTextareaContainer = styled.div`
  .a11y-hidden {
    ${a11yHidden}
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 12px;
  font-family: 'Noto Sans KR', sans-serif;

  ::placeholder {
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

TodoTextarea.defaultProps = {
  isHide: false,
  todoLabel: '',
  todoContent: '',
};
