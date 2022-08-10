import styled from 'styled-components';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { __getTodos } from 'redux/modules/todosSlice';
import { useParams } from 'react-router-dom';

const TodoContent = ({todolist}) => {
  // const { todos.id, todoTitle, TodoContent } = todos;
  



  return (
    <div>
      <TodoIdContainer>
        <StyledTodoId>{`id: (${todolist.id})`}</StyledTodoId>
      </TodoIdContainer>
      <TodoContainer>
        <h2>{todolist.title}</h2>
        <TodoContentContainer>
          <div>
            <span>{todolist.content}</span>
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
