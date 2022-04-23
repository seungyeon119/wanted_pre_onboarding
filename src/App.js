import './App.css';
import Dropdown from './components/Dropdown';
import Input from './components/Input';
import Tab from './components/Tab';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle />
      <Tab />
      <Dropdown />
      <Input />
    </div>
  );
}

export default App;
