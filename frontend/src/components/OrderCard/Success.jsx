import React, { useEffect } from 'react'
import axios from 'axios'

const Success = ({order}) => {
  useEffect(() => {
    completeOrder();
  }, []);
  const completeOrder = async () => {
    try {
      const res = await axios.put(`/order/complete/${order._id}`, {}, { withCredentials: true });
      console.log(res);
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='flex justify-center items-center h-64'>
      <div className='text-2xl font-bold text-green-500'>Success</div>
      <button onClick={() => navigate("/view-orders/completed")}>Go to Completed Orders</button>
    </div>
  )
}

export default Success  