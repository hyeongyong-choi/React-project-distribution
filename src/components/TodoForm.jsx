import Input from 'components/elements/Input';
import TodoTextarea from 'components/elements/TodoTextarea';
import Button from 'components/elements/Button';

const TodoForm = () => {
  return (
    <div>
      <Input
        id="todoWriter"
        placeholder="작성자의 이름을 입력해주세요(5자 이내)"
        labelText="이름"
      />
      <Input
        id="todoTitle"
        placeholder="제목을 입력해주세요(50자 이내)"
        labelText="제목"
      />
      <TodoTextarea todoLabel="내용" />
      <Button size="large" type="submit">
        추가하기
      </Button>
    </div>
  );
};

export default TodoForm;
