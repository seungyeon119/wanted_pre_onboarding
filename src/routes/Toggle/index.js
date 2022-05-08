import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Toggle.module.scss'

function Toggle() {
  const [isToggled, setIsToggled] = useState(false)
  const handleClick = () => {
    setIsToggled((prev) => !prev)
  }

  return (
    <div className={styles.container}>
      <button className={cx({ [styles.toggled]: isToggled })} type='button' onClick={handleClick}>
        기본
      </button>
      <button className={cx({ [styles.toggled]: !isToggled })} type='button' onClick={handleClick}>
        상세
      </button>
      <span className={cx(styles.toggleSelector, { [styles.toggled]: !isToggled })} />
    </div>
  )
}

export default Toggle
