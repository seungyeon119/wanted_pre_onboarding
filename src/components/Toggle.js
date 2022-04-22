import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d3d3;
`;

const Button = styled.button`
  z-index: 100;
  width: 50%;
  font-weight: 700;
  background-color: rgba(0, 0, 0, 0);
  color: ${({ clicked }) => (clicked ? '#4f5559' : 'gray')};
`;

const ToggleSelector = styled.div`
  position: absolute;
  width: 50%;
  height: 90%;
  background-color: #fff;
  transform: ${({ isToggled }) => (isToggled ? 'translate(100%, 0)' : 'none')};
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
