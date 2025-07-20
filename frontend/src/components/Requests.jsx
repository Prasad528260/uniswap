import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import RequestCard from './RequestCard';

const Requests = () => {
  const [exchangeData, setExchangeData] = useState([]);
  const [error, setError] = useState(null);

  const getRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/request/view`, { 
        withCredentials: true 
      });
      setExchangeData(res.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching requests:', err);
      setError('Failed to load requests. Please try again later.');
      setExchangeData([]);
    } 
  };

  useEffect(() => {
    getRequests();
  }, []);



  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 space-y-6">
      {exchangeData.map((request) => (
        <RequestCard 
          key={request._id}
          request={request}
        />
      ))}
    </div>
  );
};

export default Requests;
