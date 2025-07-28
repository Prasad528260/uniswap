import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch , useSelector} from "react-redux";
import { addRequest } from "../utils/requestSlice";
import { useState } from "react";


const useFetchRequest = () => {
      const dispatch = useDispatch();
      const requests = useSelector((state) => state.request);
      const [error, setError] = useState(null);
      const getRequests = async () => {
        try {
           
          const res = await axios.get(`${BASE_URL}/request/view`, {
            withCredentials: true,
          });
          dispatch(addRequest(res.data));
          setError(null);
        } catch (err) {
          console.error("Error fetching requests:", err);
          setError("Failed to load requests. Please try again later.");
          throw err;
        }
      };
      return {getRequests,error};

}

export default useFetchRequest
