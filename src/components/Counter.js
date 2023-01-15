import { useState } from 'react';
import '../styles/Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={`Counter ${count > 5 && 'warning'}`}>
      <div className="container">

        <h1>Mon compteur</h1>

        <div className="counter">
          <span className={`label ${count > 5 && 'to-high'}`}>Compte : {count}</span>
          <div className="controls">
            <button onClick={decrement} className="moins">-</button>
            <button onClick={increment} className="plus">+</button>
          </div>
        </div>

        {count > 5 &&
          <div class="warning-message" hidden={count <= 5}>
            Le compte est trop élevé...
          </div>
        }
      </div>
    </div>

  );
}

export default Counter;
