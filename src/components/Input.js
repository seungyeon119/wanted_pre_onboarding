import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckSvg } from '../assets/check_circle.svg';
import { ReactComponent as VisOffSvg } from '../assets/visibility_off_black_24dp.svg';
import { ReactComponent as VisOnSvg } from '../assets/visibility_black_24dp.svg';

const Container = styled.div``;

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

const CheckIcon = styled(CheckSvg)`
  fill: ${({ isValid }) => (isValid ? '#10AFAF' : '#d3d3d3')};
`;
const VisOffIcon = styled(VisOffSvg)`
  fill: gray;
`;
const VisOnIcon = styled(VisOnSvg)`
  fill: #10afaf;
`;

function Input() {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
  const handleVisibility = () => {
    setIsVisible(!isVisible);
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
        <StyledInput id="password" placeholder="Password" type={isVisible ? 'text' : 'password'} />
        {isVisible ? (
          <VisOnIcon onClick={handleVisibility} />
        ) : (
          <VisOffIcon onClick={handleVisibility} />
        )}
      </Container>
    </form>
  );
}

export default Input;
