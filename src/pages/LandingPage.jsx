import LandingTodolist from "components/LandingTodolist";
import Header from 'components/Header'


const LandingPage = () => {
  return (
    <div>
      <Header/>
      <h1>무엇을 할까요?</h1>
      <LandingTodolist text="할일 기록하기"></LandingTodolist>
      <LandingTodolist text="TODO LIST"></LandingTodolist>
    </div>
  );
};

export default LandingPage;


