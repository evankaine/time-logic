import { useState, useEffect } from 'react'
import "./Counter.css"

export default function Counter() {

  const storedValueAsNumber = Number(localStorage.getItem("counter"))
  const [count, setCount] = useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0)

  useEffect(() => {
    localStorage.setItem("counter", String(count))
  }, [count])

  return (
    <div className="counter">
      <h1 className={ count > 0 ? "positive" : count < 0 ? "negative" : null}>{count}</h1>
      <div className="button-wrapper">
        <button className="button" onClick={() => setCount(count - 1)}>-</button>
        <button className="button" onClick={() => setCount(count + 1)}>+</button>
        <button className="button-reset" onClick={() => setCount(0)}>reset</button>
      </div>
    </div>
  )
}
