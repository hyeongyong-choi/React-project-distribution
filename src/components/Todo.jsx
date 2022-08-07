import styled from 'styled-components';
import React from 'react';

function Todo() {
  return (
    <div>
      <TodoLists>
        <TodoListContent>내용</TodoListContent>
        <TodoListWriter>작성자:홍길동</TodoListWriter>
      </TodoLists>
    </div>
  );
}

export default Todo;

const TodoLists = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 90%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const TodoListContent = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const TodoListWriter = styled.p`
  font-size: 10px;
`;
