import React, { useContext, useEffect, useState } from "react";
import CallCardItem from "../components/CallCardItem";
import Spinner from "../components/Spinner";
import CallsContext from "../context/calls/CallsContext";
import { getCalls, archiveCall } from "../context/calls/CallsActions.js";
import { FaArchive, FaClipboardList } from "react-icons/fa";
import { Link } from "react-router-dom";
function ActivityFeed() {
  const { calls, loading, dispatch } = useContext(CallsContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("allCalls");
  const [selectedCall, setSelectedCall] = useState(null);
  useEffect(() => {
    setModalIsOpen(false);
    const fetchCalls = async () => {
      dispatch({ type: "SET_LOADING" });
      const callsData = await getCalls();
      const sortedCallsData = callsData.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      dispatch({ type: "SET_CALLS", payload: sortedCallsData });
    };
    fetchCalls();
  }, [dispatch]);

  const openModal = (e) => {
    setSelectedCall(e.currentTarget.id);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setSelectedCall(null);
    setModalIsOpen(false);
  };

  const setArchive = async () => {
    const callData = await archiveCall(selectedCall);
    if (callData) {
      const callsData = await getCalls();
      const sortedCallsData = callsData.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      dispatch({ type: "SET_CALLS", payload: sortedCallsData });
    }
  };

  const changeActiveTab = (tab) => {
    setActiveTab(tab.currentTarget.id);
  };

  const formatDate = (created_at) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date(created_at).toLocaleDateString("en-US", options);
    return date;
  };
  let lastCallDate = "";
  const checkLastCallDate = (date) => {
    const newDate = formatDate(date);
    if (lastCallDate !== newDate) {
      lastCallDate = newDate;
      return newDate;
    }
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="w-full mb-10">
      <div className="tabs flex justify-center">
        <a
          className={`tab tab-bordered ${
            activeTab === "allCalls" ? "tab-active" : ""
          }`}
          onClick={changeActiveTab}
          id="allCalls"
        >
          All Calls
        </a>
        <a
          className={`tab tab-bordered ${
            activeTab === "callsArchived" ? "tab-active" : ""
          }`}
          onClick={changeActiveTab}
          id="callsArchived"
        >
          Archived
        </a>
      </div>
      <div className="w-full max-w-full  max-h-full overflow-y-auto scrollbar">
        <div className="cards-container grid grid-cols-1 content-center">
          {calls.length > 0 ? (
            calls.map((call) =>
              activeTab === "allCalls" && !call.is_archived ? (
                <div>
                  {checkLastCallDate(call.created_at) ? (
                    <div className="divider">{formatDate(call.created_at)}</div>
                  ) : null}
                  <div id={call.id} onClick={openModal}>
                    <CallCardItem key={call.id} call={call} />
                  </div>
                </div>
              ) : activeTab === "callsArchived" && call.is_archived ? (
                <div>
                  {checkLastCallDate(call.created_at) ? (
                    <div className="divider">{formatDate(call.created_at)}</div>
                  ) : null}
                  <div id={call.id} onClick={openModal}>
                    <CallCardItem key={call.id} call={call} />
                  </div>
                </div>
              ) : (
                ""
              )
            )
          ) : (
            <div className="text-center text-gray-500 mt-10">No calls yet</div>
          )}
        </div>
      </div>
      <input
        type="checkbox"
        id="my-modal-3"
        class="modal-toggle"
        onClick={closeModal}
        checked={modalIsOpen}
      />
      <div class="modal flex items-end" onClick={closeModal}>
        <div class="modal-box w-full h-1/2 rounded-b-sm border-t">
          <div class="divider"></div>
          <div class="modal-content grid place-items-start w-full">
            {activeTab === "callsArchived" ? (
              ""
            ) : (
              <button
                class="btn btn-outline btn-neutral btn-block flex justify-start"
                onClick={setArchive}
              >
                <FaArchive className="w-5 h-5 mr-5" />
                Archive
              </button>
            )}
            <Link
              to={"/ActivityDetails/" + selectedCall}
              class="btn btn-outline btn-neutral btn-block flex justify-start mt-3"
            >
              <FaClipboardList className="w-5 h-5 mr-5" />
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
