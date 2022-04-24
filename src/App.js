import styled from 'styled-components';
import './App.css';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Slider from './components/Slider';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Title>1. Toggle</Title>
        <Toggle />
      </Container>
      <Container>
        <Title>2. Tab</Title>
        <Tab />
      </Container>
      <Container>
        <Title>3. Slider</Title>
        <Slider />
      </Container>
      <Container>
        <Title>4. Input</Title>
        <Input />
      </Container>
      <Container>
        <Title>5. Dropdown</Title>
        <Dropdown />
      </Container>
    </div>
  );
}

export default App;
