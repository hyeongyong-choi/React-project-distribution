import { useState } from 'react';
import styled from 'styled-components';
import Button from 'components/elements/Button';
import TodoComment from 'components/TodoComment';
import TodoContent from 'components/TodoContent';
import TodoEditor from 'components/TodoEditor';

const TodoDetail = ({ todo }) => {
  const [isEdit, setIsEdit] = useState(false);

  console.log(isEdit);

  return (
    <TodoDetailContainer>
      {isEdit ? <TodoEditor /> : <TodoContent todo={todo} />}
      <Button
        children={isEdit ? '저장하기' : '수정하기'}
        size="large"
        onClick={() => setIsEdit(!isEdit)}
      />
      {!isEdit && <TodoComment />}
    </TodoDetailContainer>
  );
};

export default TodoDetail;

const TodoDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: center;
  width: 100%;
`;
