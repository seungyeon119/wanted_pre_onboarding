import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import DropdownIcon from '../assets/drop_down.svg';
import SearchIcon from '../assets/search.svg';

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
  position: relative;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1.5px solid #d3d3d3;
  border-radius: 5px;
  text-align: left;
  background-color: #fff;

  &::after {
    content: '';
    position: absolute;
    height: 40px;
    width: 30px;
    right: 10px;
    top: 0;
    mask-image: ${() => `url(${DropdownIcon})`};
    mask-size: contain;
    mask-position: center;
    background-color: gray;
  }
`;

const SearchContainer = styled.div`
  position: absolute;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  width: 100%;
  margin-top: 5px;
  border-radius: 5px;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transition: all 0.2s linear;

  &::before {
    content: '';
    position: absolute;
    height: 40px;
    width: 20px;
    left: 10px;
    top: 0;
    mask-image: ${() => `url(${SearchIcon})`};
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: contain;
    background-color: #d3d3d3;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: 1.5px solid #d3d3d3;
  border-radius: 5px 5px 0 0;
  padding-left: 40px;

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
  padding-left: 30px;
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
  const inputEl = useRef(null);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        inputEl.current.focus();
      }, 100);
    } else {
      setTimeout(() => {
        inputEl.current.value = '';
        setSuggestions(data);
      }, 200);
    }
  }, [isVisible]);

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
        <SearchInput onChange={onTextChanged} ref={inputEl} />
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
