import React, { useEffect } from "react";
import RequestCard from "./RequestCard";
import { useSelector } from "react-redux";
import useFetchRequest from "../hooks/useFetchRequest";

const Requests = () => {
  const requests = useSelector((state) => state.request);

  const {getRequests,error} = useFetchRequest();


  useEffect(() => {
    if (!requests || requests.length === 0){
        getRequests();
    }
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
