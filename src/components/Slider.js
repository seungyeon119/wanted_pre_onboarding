import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  position: relative;
`;

const SliderContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
  border: 2px solid #d3d3d3;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: #fafafa;

  &::after {
    content: '%';
    display: block;
    margin-left: 20px;
    color: gray;
  }
`;

const SliderInput = styled.input`
  width: 100%;
`;

function Slider() {
  const [sliderValue, setSliderValue] = useState(50);
  const handleSlider = ({ target: { value } }) => {
    setSliderValue(value);
  };

  return (
    <Container>
      <SliderContent>{sliderValue}</SliderContent>
      <SliderInput type="range" value={sliderValue} id="slider" onChange={handleSlider} />
    </Container>
  );
}

export default Slider;
