import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Slider.module.scss'

function Slider() {
  const [sliderValue, setSliderValue] = useState(50)
  const handleSlider = ({ target: { value } }) => {
    setSliderValue(value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.sliderContent}>{sliderValue}</div>
      <input
        type='range'
        value={sliderValue}
        id='slider'
        min='1'
        onChange={handleSlider}
        style={{ '--value': `${sliderValue}%` }}
      />

      <div className={styles.sliderTicks}>
        {[1, 25, 50, 75, 100].map((val) => (
          <div key={`slider-tick-${val}`} className={cx(styles.sliderTick, { [styles.over]: val > sliderValue })}>
            <button type='button' onClick={() => setSliderValue(val)} value={val}>
              {val}%
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
