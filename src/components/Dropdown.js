import { useState } from 'react';
import styled from 'styled-components';

const data = [
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'USDTUSD.PERP',
  'BNBUSD.PERP',
  'USDCUSD.PERP',
  'XRPUSD.PERP',
  'SOLUSD.PERP',
  'LUNA1USD.PERP',
  'ADAUSD.PERP',
  'HEXUSD.PERP',
  'AVAXUSD.PERP',
  'DOTUSD.PERP',
  'DOGEUSD.PERP',
  'USTUSD.PERP',
  'BUSDUSD.PERP',
  'SHIBUSD.PERP',
  'WBTCUSD.PERP'
];

const Container = styled.div``;

const DropdownButton = styled.button``;

const SearchContainer = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const SearchInput = styled.input``;

const SearchList = styled.ul``;

const ListItem = styled.li``;

function Dropdown() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState('All Symbols');

  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelected = ({ target }) => {
    setSelected(target.innerHTML);
    setIsVisible(false);
  };

  return (
    <Container>
      <DropdownButton onClick={handleDropdown}>{selected}</DropdownButton>
      <SearchContainer visible={isVisible}>
        <SearchInput />
        <SearchList onClick={handleSelected}>
          {data.map((el) => (
            <ListItem>{el}</ListItem>
          ))}
        </SearchList>
      </SearchContainer>
    </Container>
  );
}

export default Dropdown;
