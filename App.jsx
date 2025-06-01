import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // state

  useEffect(() => {
    document.title = `Count: ${count}`;  // side-effect
  }, [count]); // runs when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
