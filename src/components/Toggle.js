import styled from 'styled-components';

const Container = styled.div``;

const Button = styled.button``;

function Toggle() {
  return (
    <Container>
      <Button>기본</Button>
      <Button>상세</Button>
    </Container>
  );
}

export default Toggle;
