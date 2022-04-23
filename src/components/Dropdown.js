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

const Container = styled.div`
  width: 300px;
  position: relative;
`;

const DropdownButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1.5px solid #d3d3d3;
  border-radius: 5px;
  text-align: left;
  background-color: #fff;
`;

const SearchContainer = styled.div`
  position: relative;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transition: all 0.2s linear;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1.5px solid #d3d3d3;
  border-radius: 5px 5px 0 0;
  box-shadow: 5px;

  &:focus {
    outline: none;
  }
`;

const SearchList = styled.ul`
  list-style: none;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  padding: 0;
  border: 1.5px solid #d3d3d3;
  border-top: none;
  border-radius: 0 0 5px 5px;
`;

const ListItem = styled.li`
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 0.8rem;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }
`;

function Dropdown() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState('All Symbols');
  const [suggestions, setSuggestions] = useState(data);

  const handleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelected = ({ target }) => {
    setSelected(target.innerHTML);
    setIsVisible(false);
  };

  const onTextChanged = ({ target: { value } }) => {
    if (value.length === 0) {
      setSuggestions(data);
    } else {
      const re = new RegExp(`.*${value.toUpperCase()}.*`);
      setSuggestions(data.filter((v) => re.test(v)));
    }
  };

  return (
    <Container>
      <DropdownButton onClick={handleDropdown}>{selected}</DropdownButton>
      <SearchContainer visible={isVisible}>
        <SearchInput onChange={onTextChanged} />
        <SearchList onClick={handleSelected}>
          <ListItem>All Symbols</ListItem>
          {suggestions.map((el) => (
            <ListItem>{el}</ListItem>
          ))}
        </SearchList>
      </SearchContainer>
    </Container>
  );
}

export default Dropdown;
