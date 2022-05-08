import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Tab.module.scss'

const data = [
  {
    index: 0,
    name: '감자',
  },
  {
    index: 1,
    name: '고구마',
  },
  {
    index: 2,
    name: '카레라이스',
  },
]

function Tab() {
  const [activeIndex, setActiveIndex] = useState(0)
  const handleClick = ({
    target: {
      dataset: { index },
    },
  }) => {
    setActiveIndex(Number(index))
  }

  return (
    <div className={styles.tabList}>
      {data.map(({ index, name }) => (
        <button
          type='button'
          key={`tab-item-${index}`}
          className={cx(styles.tabItem, { [styles.selected]: activeIndex === index })}
          data-index={index}
          onClick={handleClick}
        >
          {name}
        </button>
      ))}
      <span className={cx(styles.tabSlider)} style={{ transform: `translateX(${activeIndex * 100}%)` }} />
    </div>
  )
}

export default Tab
