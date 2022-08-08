import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const LandingComponent = ({ text, navigateTarget }) => {
  const navigate = useNavigate();

  return (
    <LandingTodo onClick={() => navigate(navigateTarget)}>
      <Landingtitle>{text}</Landingtitle>
      <FontAwesomeIcon
        color="rgb(254, 83, 31)"
        size="2x"
        icon={faCircleArrowRight}
      />
    </LandingTodo>
  );
};

export default LandingComponent;

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
