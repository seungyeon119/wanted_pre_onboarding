import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button`
  color: ${({ clicked }) => (clicked ? '#4f5559' : 'gray')};
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
    </Container>
  );
}

export default Toggle;
