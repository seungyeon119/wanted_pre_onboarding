import { useState } from 'react';
import styled from 'styled-components';

const TabList = styled.ul`
  list-style-type: none;
  display: flex;
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
const TabSlider = styled.span``;

function Tab() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <TabList>
      <TabItem selected={activeIndex === 0} onClick={() => handleClick(0)}>
        감자
      </TabItem>
      <TabItem selected={activeIndex === 1} onClick={() => handleClick(1)}>
        고구마
      </TabItem>
      <TabItem selected={activeIndex === 2} onClick={() => handleClick(2)}>
        카레라이스
      </TabItem>
      <TabSlider />
    </TabList>
  );
}

export default Tab;
