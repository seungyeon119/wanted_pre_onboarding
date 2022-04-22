import { useState } from 'react';
import styled from 'styled-components';

const data = ['감자', '고구마', '카레라이스'];

const TabList = styled.ul`
  list-style-type: none;
  display: flex;
  position: relative;
  padding: 0;
`;
const TabItem = styled.li`
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: ${({ selected }) => (selected ? 'black' : '#bebebe')};
  cursor: pointer;
`;
const TabSlider = styled.span`
  position: absolute;
  bottom: 0;
  width: 150px;
  height: 3px;
  z-index: 100;
  background-color: #10afaf;
  transform: ${({ activeIndex }) => (activeIndex ? `translate(${100 * activeIndex}%, 0)` : 'none')};
  transition: transform 0.2s ease-out;
`;

function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <TabList>
      {data.map((el, idx) => (
        <TabItem selected={activeIndex === idx} onClick={() => handleClick(idx)}>
          {el}
        </TabItem>
      ))}
      <TabSlider activeIndex={activeIndex} />
    </TabList>
  );
}

export default Tab;
