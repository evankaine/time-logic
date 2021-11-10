// import React from 'react'
// import axios from "axios"
// import { useState, useEffect } from 'react';
// import Converted from "./Convert"

// export default function WorldClock() {

//   const [timeEST, setTimeEST] = useState("")
//   const [timeCST, setTimeCST] = useState("")
//   const [timeMST, setTimeMST] = useState("")
//   const [timePST, setTimePST] = useState("")

//   const [dataEST, setDataEST] = useState("")
//   const [dataCST, setDataCST] = useState("")
//   const [dataMST, setDataMST] = useState("")
//   const [dataPST, setDataPST] = useState("")


//   const EST = `http://worldclockapi.com/api/json/est/now`
//   const fetchEST = async () => {
//     const res = await axios.get(`${EST}`);
//     setTimeEST(res.data.currentFileTime)
//     setDataEST(res.data)
//   };
//   useEffect(() => {
//     fetchEST()
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps


//   const CST = `http://worldclockapi.com/api/json/cst/now`
//   const fetchCST = async () => {
//     const res = await axios.get(`${CST}`);
//     setTimeCST(res.data.currentFileTime)
//     setDataCST(res.data)
//   };
//   useEffect(() => {
//     fetchCST()
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps





//   const MST = `http://worldclockapi.com/api/json/mst/now`
//   const fetchMST = async () => {
//     const res = await axios.get(`${MST}`);
//     setTimeMST(res.data.currentFileTime)
//     setDataMST(res.data)
//   };
//   useEffect(() => {
//     fetchMST()
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps





//   const PST = `http://worldclockapi.com/api/json/pst/now`
//   const fetchPST = async () => {
//     const res = await axios.get(`${PST}`);
//     setTimePST(res.data.currentFileTime)
//     setDataPST(res.data)
//   };
//   useEffect(() => {
//     fetchPST()
//   }, []) // eslint-disable-line react-hooks/exhaustive-deps





//   return (
//     <div className="clock-wrapper">
//       <Converted
//         dataEST={timeEST}
//         dataCST={timeCST}
//         dataMST={timeMST}
//         dataPST={timePST}

//         dataEST={dataEST}
//         dataCST={dataCST}
//         dataMST={dataMST}
//         dataPST={dataPST} />
//     </div>
//   )
// }
