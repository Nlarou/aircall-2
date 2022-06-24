import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { getCall } from "../context/calls/CallsActions";
import CallsContext from "../context/calls/CallsContext";

function ActivityDetails() {
  const params = useParams();
  const { call, loading, dispatch } = useContext(CallsContext);
  useEffect(() => {
    const fetchCall = async () => {
      dispatch({ type: "SET_LOADING" });
      const callData = await getCall(params.id);
      dispatch({ type: "SET_CALL", payload: callData });
    };
    fetchCall();
  }, [params.id, dispatch]);

  const formatDate = (created_at) => {
    const date = new Date(created_at).toLocaleDateString();
    const hours = new Date(date).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return date + " " + hours;
  };

  const secondsToTime = (secs) => {
    if (secs) {
      const minutes = new Date(secs * 1000).toISOString().substring(11, 16);

      return minutes;
    }
    return "NaN";
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className=" w-full max-w-full h-full ">
      <div class="card border grid grid-cols-1 my-3 mx-3 h-62 gap-y-1 full-rounded text-center p-3">
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">Call From </div>
          <div className="badge badge-accent w-full h-auto">{call.from}</div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">Call To </div>
          <div className="badge badge-accent w-full h-auto">{call.to}</div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">Call Date </div>
          <div className="badge badge-accent w-full h-auto">
            {formatDate(call.created_at)}
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">
            Call Direction{" "}
          </div>
          <div className="badge badge-accent w-full h-auto">
            {call.direction}
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">Call Status </div>

          <div className="badge badge-accent w-full h-auto">
            {call.call_type}
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">Call Length </div>
          <div className="badge badge-accent w-full h-auto">
            {secondsToTime(call.duration)}
          </div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">Call Via </div>
          <div className="badge badge-accent w-full h-auto">{call.via}</div>
        </div>
        <div className="my-1">
          <div className="font-bold text-center h-auto mb-1">
            Call Archived{" "}
          </div>
          <div className="badge badge-accent w-full h-auto">
            {call.is_archived ? "Archived" : "Not Archived"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityDetails;
