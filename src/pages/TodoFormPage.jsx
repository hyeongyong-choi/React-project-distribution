import React from "react";
import Input from "components/Input";

const TodoFormPage = () => {
  return (
    <div>
      <h1>TodoFormPage</h1>
      <h3>작성자</h3>
      <Input placeholder='작성자의 이름을 입력해주세요(5자 이내)'></Input>
      <h3>제목</h3>
      <Input placeholder='제목을 입력해주세요(50자 이내)'></Input>
    </div>
  );
};

export default TodoFormPage;
