import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector, } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter';

function App() {

  const dispatch = useDispatch();
  const {counter} = useSelector((state)=> state.counter);

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is {counter}</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button onClick={() => dispatch(incrementBy(2))}>
          IncrementBy 2
        </button>
      </div>
    </div>
  )
}

export default App
