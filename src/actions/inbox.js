export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = payload => ({
  type: RECEIVE_API_DATA,
  payload: payload
});

export const DELETE_INBOX_MAIL = "DELETE_INBOX_MAIL";
export const deleteApiData = id => ({ type: DELETE_INBOX_MAIL, payload: id });
