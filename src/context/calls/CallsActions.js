import axios from "axios";
const AIRCALL_API = process.env.REACT_APP_AIRCALL_API;

export const getCalls = async () => {
  const response = await axios.get(AIRCALL_API + "activities");
  return response.data;
};

//get a single call
export const getCall = async (id) => {
  const response = await axios.get(AIRCALL_API + "activities/" + id);
  return response.data;
};

export const archiveCall = async (id) => {
  const response = await axios.post(AIRCALL_API + "activities/" + id, {
    is_archived: true,
  });
  return response.data;
};
