import styled from 'styled-components';

const TodoContent = (todo) => {
  const { todoId, todoTitle, TodoContent } = todo;

  return (
    <div>
      <TodoIdContainer>
        <StyledTodoId>{`id: (${todoId})`}</StyledTodoId>
      </TodoIdContainer>
      <TodoContainer>
        <h2>{todoTitle}</h2>
        <TodoContentContainer>
          <div>
            <span>{TodoContent}</span>
          </div>
        </TodoContentContainer>
      </TodoContainer>
    </div>
  );
};

export default TodoContent;

const TodoIdContainer = styled.div`
  margin-bottom: 32px;
`;

const TodoContainer = styled.div`
  background-color: #edffee;
  padding: 20px;
  border-radius: 10px;
`;

const StyledTodoId = styled.span`
  font-size: 24px;
`;

const TodoContentContainer = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 50px;

  div {
    padding: 10px;
  }
`;

TodoContent.defaultProps = {
  todoId: 0,
  todoTitle: 'todo title',
  TodoContent: 'todo content',
};
