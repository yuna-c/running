const Counter = ({ count, increment }) => {
  return (
    <div className='Counter'>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Counter;
