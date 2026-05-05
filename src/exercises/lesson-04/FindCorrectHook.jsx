// TOPIC: Choose the correct tool: useRef vs useState
// TASK: Make sure it updates the text *without* triggering a re-render
import { useRef } from 'react';
export default function FindCorrectHook() {
  const clickCountRef = useRef(0);
  const buttonRef = useRef();

  function handleClick() {
    clickCountRef.current = clickCountRef.current + 1;
    buttonRef.current.textContent = `${clickCountRef.current} Clicks`;
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button ref={buttonRef} onClick={handleClick}>
        0 Clicks
      </button>
    </div>
  );
}

// useRef is used to store a value without triggering a re-render of the UI . The value changes, but React does not update the UI automatically.It is updated manually using the DOM.
