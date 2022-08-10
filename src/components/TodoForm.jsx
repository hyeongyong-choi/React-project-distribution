import Input from 'components/elements/Input';
import TodoTextarea from 'components/elements/TodoTextarea';
import Button from 'components/elements/Button';
import useInput from 'hooks/Useinput';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { __postTodos } from 'redux/modules/todosSlice';
import { useNavigate } from 'react-router-dom';


let number = 0
const TodoForm = () => {

  const todoform = useSelector(state => state.todos)
  // console.log(todoform)
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [textid,changeHandlerid ] = useInput();
  const [texttitle,changeHandlertitle ] = useInput();
  const [textbody,changeHandlerbody ] = useInput();
  
  const postsubmit = (e) =>{
    e.preventDefault()
   dispatch(__postTodos({name:textid,title:texttitle,content:textbody}));
   navigate('/')
  }


  return (
    <form onSubmit={postsubmit} >
      <Input
        id="todoWriter"
        placeholder="작성자의 이름을 입력해주세요(5자 이내)"
        labelText="이름"
        value = {textid}
        changeHandler ={changeHandlerid}
      />

      <Input
        id="todoTitle"
        placeholder="제목을 입력해주세요(50자 이내)"
        labelText="제목"
        value = {texttitle}
        changeHandler ={changeHandlertitle}
      />

      <TodoTextarea todoLabel="내용" 
        changeHandler = {changeHandlerbody}
      > </TodoTextarea>
      <Button size="large" type="submit">
        추가하기
      </Button>
    </form>
  );
};

export default TodoForm;
