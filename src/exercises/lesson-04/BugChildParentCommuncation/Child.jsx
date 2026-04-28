export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// The Child receives a function (callback) from the Parent. When the button is clicked, it calls this function. This updates the Parent’s state and the UI.
