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
  appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  background: ${({ value }) =>
    `linear-gradient(to right, #10afaf 0%, #10afaf ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    box-sizing: content-box;
    width: 16px;
    height: 16px;
    border: 3px solid white;
    border-radius: 50%;
    background: #10afaf;
    z-index: 100;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    position: relative;
    box-sizing: content-box;
    width: 16px;
    height: 16px;
    border: 3px solid white;
    border-radius: 50%;
    background: #10afaf;
    z-index: 100;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;

const SliderTicks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -17px;
`;

const SliderTick = styled.div`
  position: relative;
  z-index: -100;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ value, cur }) => (value > cur ? '#d3d3d3' : '#10AFAF')};
`;

const TickButton = styled.button`
  position: absolute;
  top: 150%;
  right: 50%;
  width: 50px;
  height: 20px;
  transform: translate(50%, 0);
  border-radius: 10px;
  text-align: center;
  font-size: 12px;
  color: gray;

  &:hover {
    background-color: #10afaf;
    color: white;
  }
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

      <SliderTicks>
        {[1, 25, 50, 75, 100].map((val) => (
          <SliderTick value={val} cur={sliderValue}>
            <TickButton onClick={() => setSliderValue(val)} value={val}>
              {`${val}%`}
            </TickButton>
          </SliderTick>
        ))}
      </SliderTicks>
    </Container>
  );
}

export default Slider;
