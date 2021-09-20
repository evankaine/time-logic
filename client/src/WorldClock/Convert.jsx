import { useState, useEffect } from 'react'


export default function Convert(props) {

  const [convertedEST, setConvertedEST] = useState()

  const {
    timeEST,
    timeCST,
    timeMST,
    timePST,

    dataEST,
    dataCST,
    dataMST,
    dataPST
  } = props

  console.log(dataEST)
  console.log(convertedEST)

  const convertFileTime = () => {
    let time = new Date().getTime(timeEST); // get number
    let date = new Date(time); // create Date object
    setConvertedEST(date)
  }
    useEffect(() => {
      convertFileTime()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
  

  return (
    <div className="wrapper">
      <div className="est">
        <p>{dataEST.dayOfTheWeek}, {dataEST.utcOffset}</p>
        <h3>{dataEST.timeZoneName}</h3>
        <p>TIME: </p>
      </div>

      <div className="cst">
        <p>{dataCST.dayOfTheWeek}, {dataCST.utcOffset}</p>
        <h3>{dataCST.timeZoneName}</h3>
      </div>
    
      <div className="mst">
        <p>{dataMST.dayOfTheWeek}, {dataMST.utcOffset}</p>
        <h3>{dataMST.timeZoneName}</h3>
      </div>

      <div className="pst">
        <p>{dataPST.dayOfTheWeek}, {dataPST.utcOffset}</p>
        <h3>{dataPST.timeZoneName}</h3>
      </div>
    </div>
  )
}
