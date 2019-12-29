import { RECEIVE_API_DATA, DELETE_INBOX_MAIL } from "../actions/inbox.js";

let initialState = {};

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_API_DATA:
      return {
        ...state,
        data: action.payload
      };

      break;

    case DELETE_INBOX_MAIL:
      if(Object.entries(state).length === 0 && state.constructor === Object){
        return {"data": [{"id": 2}]}
      }
      else{
      return {
        ...state,
        data: state["data"].filter(x => x.id !== action.payload)
      };
    }
      break;

    default:
      return state;
  }
};
