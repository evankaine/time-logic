// import { useState, useEffect } from 'react'


// export default function Convert(props) {

//   const [convertedEST, setConvertedEST] = useState("")
//   const [convertedCST, setConvertedCST] = useState("")
//   const [convertedMST, setConvertedMST] = useState("")
//   const [convertedPST, setConvertedPST] = useState("")

//   const {
//     timeEST,
//     timeCST,
//     timeMST,
//     timePST,
        
//     dataEST,
//     dataCST,
//     dataMST,
//     dataPST
//   } = props

//   // const newTime = () => {
//   //   let time = new Date().getTime(timeEST);
//   //   let date = new Date(time);
//   //   setConvertedEST(date)
//   // }
//   // useEffect(() => {
//   //   newTime()
//   // }, []) // eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <div className="wrapper">
//       <div className="est">
//         <p>{dataEST.dayOfTheWeek}, {dataEST.utcOffset}</p>
//         <h3>{dataEST.timeZoneName}</h3>
//         <p>{convertedEST}</p>
//       </div>

//       <div className="cst">
//         <p>{dataCST.dayOfTheWeek}, {dataCST.utcOffset}</p>
//         <h3>{dataCST.timeZoneName}</h3>
//       </div>
    
//       <div className="mst">
//         <p>{dataMST.dayOfTheWeek}, {dataMST.utcOffset}</p>
//         <h3>{dataMST.timeZoneName}</h3>
//       </div>

//       <div className="pst">
//         <p>{dataPST.dayOfTheWeek}, {dataPST.utcOffset}</p>
//         <h3>{dataPST.timeZoneName}</h3>
//       </div>
//     </div>
//   )
// }
