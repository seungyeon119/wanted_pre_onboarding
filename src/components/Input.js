import { useState } from 'react';
import styled from 'styled-components';

import { ReactComponent as CheckSvg } from '../assets/check_circle.svg';
import VisOffSvg from '../assets/visibility_off_black_24dp.svg';
import VisOnSvg from '../assets/visibility_black_24dp.svg';

const Container = styled.div`
  position: relative;
  width: 300px;
  margin: 5px;
`;

const StyledInput = styled.input`
  width: 300px;
  height: 40px;
  border: 1.5px solid #d3d3d3;
  border-radius: 5px;
  padding: 5px 10px;

  &:focus {
    outline: none;
    border-color: gray;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin: 2px 8px;
  font-size: 0.8rem;
  color: gray;
`;

const VisibilityButton = styled.button`
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: ${({ isVisible }) => (isVisible ? `#10afaf` : `gray`)};
  mask-image: ${({ isVisible }) => (isVisible ? `url(${VisOnSvg})` : `url(${VisOffSvg})`)};
  mask-position: center;
  mask-repeat: no-repeat;
`;

const CheckIcon = styled(CheckSvg)`
  position: absolute;
  height: 40px;
  right: 10px;
  fill: ${({ isValid }) => (isValid ? '#10AFAF' : '#d3d3d3')};
`;

function Input() {
  // const [email, setEmail] = useState('');
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
    // setEmail(value);
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
        <VisibilityButton type="button" onClick={handleVisibility} isVisible={isVisible} />
      </Container>
    </form>
  );
}

export default Input;
