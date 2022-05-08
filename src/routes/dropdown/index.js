import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import { cx } from '../../styles'
import styles from './Dropdown.module.scss'
import { DropdownIcon, SearchIcon } from '../../assets/svgs'

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
  'WBTCUSD.PERP',
]

function Dropdown() {
  const [isVisible, setIsVisible] = useState(false)
  const [selected, setSelected] = useState('All Symbols')
  const [suggestions, setSuggestions] = useState(data)
  const [inputText, setInputText] = useState('')
  const inputEl = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (isVisible) {
      setInputText('')
      setSuggestions(data)
      setTimeout(() => {
        inputEl.current.focus()
      }, 100)
    }
  }, [isVisible])

  useClickAway(dropdownRef, () => {
    if (isVisible) setIsVisible((prev) => !prev)
  })

  const handleDropdown = () => {
    setIsVisible((prev) => !prev)
  }

  const handleItemClicked = ({ currentTarget: { dataset } }) => {
    setSelected(dataset.selected)
    setIsVisible(false)
  }

  const handleInputChanged = ({ currentTarget: { value } }) => {
    setInputText(value)
    if (value.length === 0) {
      setSuggestions(data)
    } else {
      const re = new RegExp(`.*${value.toUpperCase()}.*`)
      setSuggestions(data.filter((v) => re.test(v)))
    }
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button type='button' onClick={handleDropdown}>
        {selected}
        <DropdownIcon className={styles.icon} />
      </button>
      <div className={cx(styles.searchContainer, { [styles.visible]: isVisible })}>
        <SearchIcon className={styles.icon} />
        <input onChange={handleInputChanged} ref={inputEl} value={inputText} />
        <ul>
          {suggestions.map((el, idx) => (
            <li key={`dropdown-item-${idx}`}>
              <button type='button' onClick={handleItemClicked} data-selected={el}>
                {el}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
