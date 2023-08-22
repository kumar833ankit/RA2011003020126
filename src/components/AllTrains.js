

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function AllTrains() {

//   const [trains, setTrains] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const obj = await axios.get('http://20.244.56.144/train/trains');
   
//     function fun(timestamp, minutesToAdd) {
//         let date = new Date(timestamp);
//         date.setMinutes(date.getMinutes() + minutesToAdd);
//         return date;
//       }
//       returnRes=[]

//       obj.forEach(ele => {
//           let obj1=ele["departureTime"];
//       let DeptTimeOrig= new Date();
//       let delay=ele["delayedBy"]
//       DeptTimeOrig.setHours(obj1["Hours"])
//       DeptTimeOrig.setMinutes(obj1["Minutes"])
//       DeptTimeOrig.setSeconds(obj1["Seconds"])
//       let date = Date.now(); 
//       let DeptTimelate = fun(DeptTimeOrig, delay);
//       let newdate=new Date(date);
//       let abcd =DeptTimelate.getTime()-newdate.getTime()
//       abcd=abcd/60000
//       if(abcd<720 && abcd>30)
//           returnRes.push(ele)
//       });
//       setTrains(returnRes);
      
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {trains.map(train => (
//         <Link to={`/train/${train.trainNumber}`} key={train.trainNumberumber}>
//           {train.name}
//         </Link>
//       ))}
//     </div>
//   );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AllTrains() {

  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://20.244.56.144/train/trains');
        const trainData = response.data;

        const fun = (timestamp, minutesToAdd) => {
          let date = new Date(timestamp);
          date.setMinutes(date.getMinutes() + minutesToAdd);
          return date;
        }

        const returnRes = [];

        trainData.forEach(ele => {
          let obj1 = ele["departureTime"];
          let DeptTimeOrig = new Date();
          let delay = ele["delayedBy"];
          DeptTimeOrig.setHours(obj1["Hours"]);
          DeptTimeOrig.setMinutes(obj1["Minutes"]);
          DeptTimeOrig.setSeconds(obj1["Seconds"]);
          let date = Date.now();
          let DeptTimelate = fun(DeptTimeOrig, delay);
          let newdate = new Date(date);
          let abcd = DeptTimelate.getTime() - newdate.getTime();
          abcd = abcd / 60000;
          if (abcd < 720 && abcd > 30) {
            returnRes.push(ele);
          }
        });

        setTrains(returnRes);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {trains.map(train => (
        <Link to={`/train/${train.trainNumber}`} key={train.trainNumber}>
          {train.name}
        </Link>
      ))}
    </div>
  );
}
