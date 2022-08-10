import styled from 'styled-components';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { __deleteTodos } from 'redux/modules/todosSlice';
import { useDispatch } from 'react-redux';


function Todo({ id, title, content, todos }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // let link = todoss.map((todos)=>todos.id)
  
  // let link = todoss.find(todo=> todo.id === id)
  // console.log(link)
  

  // const navigate = useNavigate();

  const onClickpage = ()=>{
    navigate(`/todos/${id}`)
  }

  const deletehandler = () =>{
    // console.log(todos)
    dispatch(__deleteTodos(id))
  }

  return (
      <TodoLists  >
        <Todobox onClick={onClickpage}>
          <TodoListtitle>{title}</TodoListtitle>
          <TodoListWriter>{content}</TodoListWriter>
        </Todobox>
        <FontAwesomeIcon
          onClick={deletehandler}
          color="rgb(254, 83, 31)"
          size="1x"
          icon={faTrashCan}
          cursor='pointer'
        />
      </TodoLists>
  );
}

export default Todo;

const TodoLists = styled.div`

  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 100%;
  margin: 10px auto;
  display: flex;
  /* flex-direction: column; */
  gap: 15px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const Todobox = styled.div`
  flex-grow: 1;
  
`
const TodoListtitle = styled.p`
  font-size: 20px;
  font-weight: 400;
`;

const TodoListWriter = styled.p`
  font-size: 10px;
`;
