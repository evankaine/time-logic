import React, {useState, useCallback} from 'react'
import "./Timer.css"

const defaultCount = 10;
const intervalGap = 300;

export default function Timer(props) {

  const [timerCount, setTimerCount] = useState(defaultCount);
    
    const startTimerWrapper = useCallback((func)=>{
        let timeInterval: NodeJS.Timer;
        return () => {
            if(timeInterval) {
                clearInterval(timeInterval)
            }
            setTimerCount(defaultCount)
            timeInterval = setInterval(() => {
                func(timeInterval)
            }, intervalGap)
        }
    }, [])

    const timer = useCallback(startTimerWrapper((intervalfn: NodeJS.Timeout) => {
        setTimerCount((val) => {
          if(val === 0 ) {
              clearInterval(intervalfn);
              return val
          } 
          return val - 1
      })
  }), [])

  
  return (
    <div className="container">
        <div> <button onClick={timer}>Start/Reset</button></div>
        <div> {timerCount}</div>
    </div>
  )
}
