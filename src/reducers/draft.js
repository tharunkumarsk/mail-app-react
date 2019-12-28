import {
  READ_DRAFT_MAIL,
  STORE_DRAFT_MAIL,
  DELETE_DRAFT_MAIL,
  RESTORE_DRAFT_MAIL
} from "../actions/draft.js";

let initialState = {};
initialState.id = 2001;
initialState.data = [
  {
    id: 2000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Draft mail",
    time: "2018-01-23T18:25",
    body: "you can edit this"
  }
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_DRAFT_MAIL:
      return {
        ...state
      };
      break;
    case STORE_DRAFT_MAIL:
      var found = false;
      for (var i = 0; i < initialState.data.length; i++) {
        if (initialState.data[i].id == action.payload.id) {
          initialState.data[i] = action.payload;
          found = true;
          break;
        }
      }
      if (!found) {
        var temp  = action.payload;
          temp.id = initialState.id;
          temp.time = new Date().toUTCString();
          initialState.data.push(temp);
          initialState.id+=1;
          return initialState; 
      }

      return {
        ...state,
        data: initialState.data
      };
      break;
    case DELETE_DRAFT_MAIL:
      return {
        ...state,
        data: state["data"].filter(x => x.id !== action.payload),
        id:state["id"]+1
      };
      break;

    case RESTORE_DRAFT_MAIL:
      initialState.data = initialState.data.filter(x => x.id !== action.payload);
      initialState.id+=1
      initialState.data[1].id+=1
      return initialState;
      break;
    default:
      return state;
  }
};
