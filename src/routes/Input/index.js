import { useState } from 'react'
import { cx } from '../../styles'
import styles from './Input.module.scss'
import { CheckIcon, VisOffIcon, VisOnIcon } from '../../assets/svgs'

function Input() {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const validateEmail = (data) => {
    if (emailRegex.test(data)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }
  const handleEmailInput = ({ target: { value } }) => {
    setEmail(value)
    validateEmail(value)
  }
  const handleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <>
      <div className={styles.container}>
        <label htmlFor='email'>E-mail</label>
        <div className={styles.inputContainer}>
          <input id='email' type='email' placeholder='Email' onChange={handleEmailInput} />
          <CheckIcon className={cx(styles.icon, { [styles.valid]: isValid })} />
          {isValid}
        </div>
      </div>
      <div className={styles.container}>
        <label htmlFor='password'>Password</label>
        <div className={styles.inputContainer}>
          <input id='password' type={isVisible ? 'text' : 'password'} placeholder='Password' />
          <button type='button' onClick={handleVisibility}>
            {isVisible ? (
              <VisOnIcon className={cx(styles.icon, styles.visible, styles.visOn)} />
            ) : (
              <VisOffIcon className={cx(styles.icon, styles.visible, styles.visOff)} />
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default Input
