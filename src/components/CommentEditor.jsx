// import styled from 'styled-components';
// import Button from 'sparta-todolist/components/elements/Button';
// import Input from './elements/Input';
// import useInput from 'sparta-todolist/hooks/useInput';

// const CommentEditor = ({ comment, handleToggleCommentEditor }) => {
// const { todoId, name, commentText, id } = comment;
// const [newComment, setNewComment, commentReset] = useInput('');

// return (
// <>
// <CommentEditorWrapper>
// <Input
// id="commentEditor"
// name="commentEditor"
// isHide={true}
// defaultValue={commentText}
// changeHandler={setNewComment}
// />
// </CommentEditorWrapper>
// <CommentBtnWrapper>
// <Button variant="revise" clickHandler={handleToggleCommentEditor}>
// 취소
// </Button>
// <Button variant="revise">
// 저장
// </Button>
// </CommentBtnWrapper>
// </>
// );
// };

// export default CommentEditor;

// const CommentEditorWrapper = styled.div``;

// const CommentBtnWrapper = styled.div`
// display: flex;

// button {
// margin-right: 10px;
// }
// `;