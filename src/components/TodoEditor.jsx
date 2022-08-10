import TodoTextarea from 'components/elements/TodoTextarea';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { __getTodos } from 'redux/modules/todosSlice';
const TodoEditor = ({updatetxt,updateHandler,todolist}) => {

  return (
    <TodoEditorContainer>
      <TodoTextarea isHide={true} todoLabel="내용" value={updatetxt} changeHandler={updateHandler} todoContent={todolist.content}/>
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
