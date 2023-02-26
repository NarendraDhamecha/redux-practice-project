import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {};

  const IncrementBy5 = () => {
    dispatch({type: "incrementBy5"})
  }

  const DecrementBy5 = () => {
    dispatch({type: "decrementBy5"})
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={IncrementBy5}>Increment By 5</button>
        <button onClick={DecrementBy5}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
