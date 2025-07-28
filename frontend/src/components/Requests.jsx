import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import RequestCard from "./RequestCard";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addRequest } from "../utils/requestSlice";
const Requests = () => {
  const requests = useSelector((state) => state.request);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const getRequests = async () => {
    try {
      if (requests || requests.length >= 0) return;
      const res = await axios.get(`${BASE_URL}/request/view`, {
        withCredentials: true,
      });
      dispatch(addRequest(res.data));
      setError(null);
    } catch (err) {
      console.error("Error fetching requests:", err);
      setError("Failed to load requests. Please try again later.");
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests || requests.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <div className="text-secondary text-3xl">No requests found</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 p-6 flex items-center justify-center">
        <div className="text-red-400">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6 space-y-6">
      {requests.map((request) => (
        <RequestCard key={request._id} request={request} />
      ))}
    </div>
  );
};

export default Requests;
