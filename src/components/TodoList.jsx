import React, { useEffect,useState } from 'react';

import styled from 'styled-components';
import Todo from 'components/Todo';
import { useDispatch ,useSelector} from 'react-redux';
import { __getTodos } from 'redux/modules/todosSlice';

function TodoList() {
  
  const dispatch = useDispatch();
  const { isLoading, error, todos } = useSelector((state) => state.todos);
  
  console.log(todos)

  useEffect(()=>{
    dispatch(__getTodos());
  },[dispatch])

  if (isLoading) {
    return <div>로딩 중....</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <TodoListTitle>내 할일</TodoListTitle>
      {todos.map((todo)=>(
      <ListArray key={todo.id}>
        <Todo id={todo.id} title={todo.title} content={todo.content} todos={todos}/>
      </ListArray>))}      
    </div>
  );
}

export default TodoList;

const TodoListTitle = styled.h1`
  font-size: 32px;
  margin: 30px 20px;
`;

const ListArray = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
