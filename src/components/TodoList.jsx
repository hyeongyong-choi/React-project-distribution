import React from 'react'
import Todo from './Todo'
import styled from "styled-components"

function TodoList() {
  return (
    <div>
       <TodoListTitle>
      내 할일
      </TodoListTitle>
      <ListArray>
      <Todo/>
      </ListArray>
    </div>
  )
}

export default TodoList

const TodoListTitle= styled.h1`
  font-size:32px;
  margin:30px 20px;
`
const ListArray= styled.div`
  display:flex;
  flex-direction:column;
  gap:30px;
`