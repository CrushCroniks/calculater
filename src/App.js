import logo from './logo.svg';
import './App.css';
import Input from './Components/Input/input';
import Button from './Components/button/button';
import {useState} from 'react'

function App() {
  let [inputValue,setInputValue] = useState('')
  
  function Numbers(symbol){
    setInputValue(inputValue+symbol)
  }


  function Operators(symbol){
    setInputValue(inputValue+symbol)
  }

  function e(){
    setInputValue(inputValue.slice(0, -1))
  }

  function ec(){
    setInputValue("")
  }

  function equal(){
    setInputValue(eval(inputValue))
  }
  
  return (
    <div className='calculator'>
      <Input value={inputValue}></Input>
      <Button print={Numbers} text="1"></Button>
      <Button print={Numbers} text="2"></Button>
      <Button print={Numbers} text="3"></Button>
      <Button print={Operators} text="+"></Button>
      <Button print={Numbers} text="4"></Button>
      <Button print={Numbers} text="5"></Button>
      <Button print={Numbers} text="6"></Button>
      <Button print={Operators} text="-"></Button>
      <Button print={Numbers} text="7"></Button>
      <Button print={Numbers} text="8"></Button>
      <Button print={Numbers} text="9"></Button>
      <Button print={Operators} text="*"></Button>
      <Button print={e} text="e"></Button>
      <Button print={Numbers} text="0"></Button>
      <Button print={ec} text="ec"></Button>
      <Button print={Operators} text="/"></Button>
      <Button nameclass="equal" print={equal} text="="></Button>
    </div>
  ) ;
}

export default App;

