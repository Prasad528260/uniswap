import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import OrderCard from "./OrderCard";

const OrderPage = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { type } = useParams();

  // * DEPENDING ON TYPE RENDER THE DATA LIKE PENDING AND COMPLETED
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        if (type === "pending") {
          const { data } = await axios.get(`${BASE_URL}/order/reciever/pending`, {
            withCredentials: true,
          });
          setPendingOrders(data);
        } else if (type === "completed") {
          const { data } = await axios.get(`${BASE_URL}/order/reciever/completed`, {
            withCredentials: true,
          });
          setCompletedOrders(data);
        }
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [type]);

  if (loading) {
    return <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>;
  }

  if (type === "pending") {
    return (
      <div className="space-y-6">
        {pendingOrders?.length > 0 ? (
          pendingOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))
        ) : (
          <div className="text-center text-gray-400 py-8">No pending orders found</div>
        )}
      </div>
    );
  }

  if (type === "completed") {
    return (
      <div className="space-y-6">
        {completedOrders?.length > 0 ? (
          completedOrders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))
        ) : (
          <div className="text-center text-gray-400 py-8">No completed orders found</div>
        )}
      </div>
    );
  }

  return null;
};

export default OrderPage;
