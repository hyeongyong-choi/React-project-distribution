import TodoTextarea from 'components/elements/TodoTextarea';
import styled from 'styled-components';

const TodoEditor = () => {
  return (
    <TodoEditorContainer>
      <TodoTextarea isHide={true} todoLabel="내용" />
    </TodoEditorContainer>
  );
};

export default TodoEditor;

const TodoEditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
  margin: 24px;
`;
