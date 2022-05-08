import Dropdown from './dropdown'
import Input from './Input'
import styles from './Routes.module.scss'
import Slider from './Slider'
import Tab from './Tab'
import Toggle from './Toggle'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1>1. Toggle</h1>
        <Toggle />
      </div>
      <div className={styles.container}>
        <h1>2. Tab</h1>
        <Tab />
      </div>
      <div className={styles.container}>
        <h1>3. Input</h1>
        <Input />
      </div>
      <div className={styles.container}>
        <h1>4. Slider</h1>
        <Slider />
      </div>
      <div className={styles.container}>
        <h1>5. Dropdown</h1>
        <Dropdown />
      </div>
    </div>
  )
}

export default App
