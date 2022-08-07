import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';

function Landing() {
  return (
    <div>
      <TodoListTitle>무엇을 할까요?</TodoListTitle>
      <LandingTodo>
        <Landingtitle>할일 기록하기</Landingtitle>
        <FontAwesomeIcon
          color="rgb(254, 83, 31)"
          size="2x"
          icon={faCircleArrowRight}
        />
      </LandingTodo>
      <LandingTodo>
        <Landingtitle>TODO LIST</Landingtitle>
        <FontAwesomeIcon
          color="rgb(254, 83, 31)"
          size="2x"
          icon={faCircleArrowRight}
        />
      </LandingTodo>
    </div>
  );
}

export default Landing;

const LandingTodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* flex-direction: row; */
  padding: 0px 20px;
  width: 95%;
  height: 120px;
  margin: 20px auto;
  border: 1px solid rgb(238, 238, 238);
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  cursor: pointer;
`;
const Landingtitle = styled.h2`
  font-size: 24px;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-decoration: none;
  outline: none;
  font-weight: 400;
  display: inline;
`;
const TodoListTitle = styled.h1`
  font-size: 32px;
  margin: 30px 20px;
`;
