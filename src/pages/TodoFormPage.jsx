import React from "react";
import Input from "components/Input";
import Header from 'components/Header'
import Button from "components/Button";


const TodoFormPage = () => {
  return (
    <div>
      <Header/>
      <h1>TodoFormPage</h1>
      <h3>작성자</h3>
      <Input placeholder='작성자의 이름을 입력해주세요(5자 이내)'></Input>
      <h3>제목</h3>
      <Input placeholder='제목을 입력해주세요(50자 이내)'></Input>
      <Button size='large'>추가하기</Button>
    </div>
  );
};

export default TodoFormPage;
