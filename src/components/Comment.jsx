import styled from 'styled-components';
import Button from 'components/elements/Button';

const Comment = () => {
  return (
    <CommentContainer>
      <CommentWrapper>
        <span>name</span>
        <span>comment</span>
      </CommentWrapper>
      <CommentBtnWrapper>
        <Button variant="revise" />
        <Button variant="delete" />
      </CommentBtnWrapper>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #9e9e9e;
  border-radius: 10px;
  padding: 12px;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentBtnWrapper = styled.div`
  display: flex;

  button {
    margin-right: 10px;
  }
`;
