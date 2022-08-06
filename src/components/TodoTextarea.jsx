import styled from 'styled-components';

const TodoTextarea = (props) => {
  const { isEdit, todoContent } = props;

  return (
    <div>
      <label htmlFor="todo-textarea">내용</label>
      <StyledTextarea
        id="todo-textarea"
        name="content"
        rows="10"
        cols="50"
        placeholder="내용을 입력해주세요. (2~200자)"
      >
        {isEdit ? { todoContent } : ''}
      </StyledTextarea>
    </div>
  );
};

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 1px solid #eeeeee;
  padding: 12px;
`;
export default TodoTextarea;

TodoTextarea.defaultProps = {
  isEdit: false,
  todoContent: '',
};
