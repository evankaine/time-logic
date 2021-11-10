import React, { useEffect, useState } from 'react'
import "./Clock.css"

export default function Clock() {

  let [date, setDate] = useState(new Date())

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000)

    return function cleanup() {
      clearInterval(timer)
    }
  })

  const zone = new Date();
  const dateAsString = zone.toString();
  const timezone = dateAsString.match(/\(([^\)]+)\)$/)[1];

  return (
    <div className="clock">
      <h1 className="clock-time">{date.toLocaleString()}</h1>
      <p className="clock-timezone">{timezone}</p>
    </div>
  )
}
