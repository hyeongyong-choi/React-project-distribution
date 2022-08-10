import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import TodoComment from 'components/TodoComment';
import TodoContent from 'components/TodoContent';
import TodoEditor from 'components/TodoEditor';
import useInput from 'hooks/Useinput';
import { __getTodos , __updateTodos} from 'redux/modules/todosSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';

const TodoDetail = () => {
  let dispatch = useDispatch()

  const todos = useSelector((state)=> state.todos.todos)
  console.log(todos)

  let param = useParams()
  let paramID = Number(param.id)
  // console.log(paramID)
  
  const todolist = todos.find((todo)=> todo.id === paramID)
  const todolistID = todolist.id

  // const 

  const [updatetxt,updateHandler] = useInput()

  const updateClick = () => {
    setIsEdit(!isEdit)
    dispatch(__updateTodos({ id: todolistID , content : updatetxt}))
    dispatch(__getTodos())
  }

  // useEffect(()=> {
  //   dispatch(__getTodos())
  // },[])

  const [isEdit, setIsEdit] = useState(false);
  // console.log(isEdit);

  return (
    <TodoDetailContainer>
      {isEdit ? <TodoEditor updatetxt={updatetxt} updateHandler={updateHandler} todolist={todolist}/> : <TodoContent todolist={todolist}/>}
      <Button
        children={isEdit ? '저장하기' : '수정하기'}
        size="large"
        clickHandler={() => updateClick()}
      />
      {!isEdit && <TodoComment />}
    </TodoDetailContainer>
  
)};

export default TodoDetail;

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  width: 100%;
`;
