import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-sizing: content-box;
  width: 400px;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 4px;
  border-radius: 50px;
  background-color: #d3d3d3;
`;

const Button = styled.button`
  z-index: 100;
  width: 50%;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ clicked }) => (clicked ? '#4f5559' : 'gray')};
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    color: #4f5559;
  }
`;

const ToggleSelector = styled.div`
  position: absolute;
  left: 1%;
  width: 49%;
  height: 90%;
  border-radius: 50px;
  background-color: #fff;
  transform: ${({ isToggled }) => (isToggled ? 'translate(100%, 0)' : 'none')};
  transition: all 0.2s ease-out;
`;

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);
  const handleClick = (state) => {
    setIsToggled(state);
  };
  return (
    <Container>
      <Button onClick={() => handleClick(false)} clicked={!isToggled}>
        기본
      </Button>
      <Button onClick={() => handleClick(true)} clicked={isToggled}>
        상세
      </Button>
      <ToggleSelector isToggled={isToggled} />
    </Container>
  );
}

export default Toggle;
