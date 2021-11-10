import React, { useState, useRef, useEffect } from 'react';
import "./Stopwatch.css"

export default function Stopwatch() {

  const storedValueAsNumber = Number(localStorage.getItem("count"))
  const [timer, setTimer] = useState(Number.isInteger(storedValueAsNumber) ? storedValueAsNumber : 0)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const increment = useRef(null)
  
  useEffect(() => {
    localStorage.setItem("count", String(timer))
  }, [timer])

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(increment.current)
    setIsPaused(false)
  }

  const handleResume = () => {
    setIsPaused(true)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }

  const handleReset = () => {
    clearInterval(increment.current)
    setIsActive(false)
    setIsPaused(false)
    setTimer(0)
  }

  const formatTime = () => {
    const getSeconds = `0${(timer % 60)}`.slice(-2)
    const minutes = `${Math.floor(timer / 60)}`
    const getMinutes = `0${minutes % 60}`.slice(-2)
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  return (
    <div className="container">
        <h1>{formatTime()}</h1>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart} className="start">Start</button>
              : (
                isPaused ? <button onClick={handlePause} className="pause">Pause</button> :
                  <button onClick={handleResume} className="start">Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive} className="reset">Reset</button>
      </div>
    </div>
  )
}





