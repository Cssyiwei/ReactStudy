function Count(props) {
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      <h1>reactredux</h1>
      <h1>{count}</h1>
      <button onClick={onIncrement} className="btn">
        增加
      </button>
      <button onClick={onDecrement} className="btn">
        减少
      </button>
    </div>
  );
}
export default Count;
