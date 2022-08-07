import styled from 'styled-components';
import Button from './Button'

const Header = () => {
  return (
    <HeaderContainer>
      <Button variant='home'/>
      <h1>모두의 투두리스트</h1>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  padding: 0 15px;
  border-bottom: 1px solid #eeeeee;
`;

export default Header;
