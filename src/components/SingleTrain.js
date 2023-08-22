import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SingleTrain() {
  const [train, setTrain] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`http://20.244.56.144/train/${id}`);
      setTrain(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {train ? (
        <div>
          <h2>Train Details</h2>
          <p>Name: {train.trainName}</p>
          
          <p>To: {train.to}</p>
          <p>Departure Time: {train.departureTime}</p>
          <p>Arrival Time: {train.arrivalTime}</p>
          <p>Total Seats: {train.totalSeats}</p>
          <p>Other Data: {train.otherData}</p>
          <p>Available Seats: {train.seatsAvailable}</p>
          <p>Delayed By: {train.delayedBy}</p>
          {/* */}
        </div>
      ) : (
        <p>Loading train data...</p>
      )}
    </div>
  );
}
