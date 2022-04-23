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
  'SOLLUNA1USD.PERP',
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

function Dropdown() {
  const [isVisible, setIsVisible] = useState(false);
  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Container>
      <DropdownButton onClick={handleDropdown}>dropdown</DropdownButton>
      <SearchContainer visible={isVisible}>
        <SearchInput />
        <SearchList>
          {data.map((el) => (
            <li>{el}</li>
          ))}
        </SearchList>
      </SearchContainer>
    </Container>
  );
}

export default Dropdown;
