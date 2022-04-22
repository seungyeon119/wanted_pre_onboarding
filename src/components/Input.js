import styled from 'styled-components';

const Container = styled.div``;

const StyledInput = styled.input``;

const StyledLabel = styled.label``;

function Input() {
  return (
    <>
      <Container>
        <StyledLabel htmlFor="email">E-mail</StyledLabel>
        <StyledInput id="email" type="email" placeholder="Email" />
      </Container>
      <Container>
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <StyledInput id="password" placeholder="Password" />
      </Container>
    </>
  );
}

export default Input;
