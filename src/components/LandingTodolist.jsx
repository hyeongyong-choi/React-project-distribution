import styled from "styled-components";


function LandingTodolist() {
    return (
        <div>
            <LandingTodo><h2>할일 기록하기</h2></LandingTodo>
            <LandingTodo><h2>TODO LIST</h2></LandingTodo>
        </div>
        )
}

export default LandingTodolist;

const LandingTodo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 0px 20px;
    width: 100%;
    height: 120px;
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    cursor: pointer;
      `