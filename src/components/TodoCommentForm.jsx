import Input from 'components/elements/Input';
import styled from 'styled-components';
import Button from './elements/Button';

const TodoCommentForm = () => {
  return (
    <TodoCommentFormContainer>
      <form>
        <NameContainer>
          <Input
            placeholder="이름(1~5자)"
            width="100%"
            id="commentName"
            labelText="이름"
          />
        </NameContainer>
        <Input
          placeholder="댓글을 추가하세요(1~30자)"
          id="commentContent"
          labelText="댓글"
        />
        <Button size="small">수정하기</Button>
      </form>
    </TodoCommentFormContainer>
  );
};

export default TodoCommentForm;

const TodoCommentFormContainer = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 24px;

    input {
      width: 100%;
    }
  }
`;

const NameContainer = styled.div`
  width: 150px;
`;
