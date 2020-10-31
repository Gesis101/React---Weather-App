import { useState } from 'react';
import './App.css';

function Button(props){
  return <button onClick={() =>  props.onClickFunction(props.increment)}>{props.increment+" "}</button>
}

function Display(props){
  return(
    <div>{props.message}</div>
  )
}

function ResetButton(props){
  return(
    <button onClick={props.reset}> Reset button</button>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (value) => setCounter(counter+value);
  const resetCounter = () => setCounter(0);

  return (
    <div className="App">
      <header className="App-header">
       <Button increment={1} onClickFunction ={incrementCounter}></Button>
       <Button increment={5} onClickFunction ={incrementCounter}></Button>
       <Button increment={10} onClickFunction ={incrementCounter}></Button>
       <Button increment={100} onClickFunction ={incrementCounter}></Button>
       <ResetButton reset={resetCounter}></ResetButton>
       <Display message={counter}></Display>
      </header>
    </div>
  );
}

export default App;
