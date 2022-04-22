import styled from 'styled-components';

const TabList = styled.ul``;
const TabItem = styled.li``;
const TabSlider = styled.span``;

function Tab() {
  return (
    <TabList>
      <TabItem>감자</TabItem>
      <TabItem>고구마</TabItem>
      <TabItem>카레라이스</TabItem>
      <TabSlider />
    </TabList>
  );
}

export default Tab;
