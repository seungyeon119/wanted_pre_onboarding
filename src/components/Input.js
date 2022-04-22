import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckSvg } from '../assets/check_circle.svg';

const Container = styled.div``;

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

const CheckIcon = styled(CheckSvg)`
  fill: ${({ isValid }) => (isValid ? '#10AFAF' : '#d3d3d3')};
`;

function Input() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (emailRegex.test(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
    validateEmail(value);
  };

  return (
    <form>
      <Container>
        <StyledLabel htmlFor="email">E-mail</StyledLabel>
        <StyledInput id="email" type="email" placeholder="Email" onChange={handleEmail} />
        <CheckIcon isValid={isValid} />
      </Container>
      <Container>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput id="password" placeholder="Password" />
      </Container>
    </form>
  );
}

export default Input;
