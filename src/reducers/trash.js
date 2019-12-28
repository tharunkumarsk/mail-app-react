import {
  READ_TRASH_MAIL,
  STORE_TRASH_MAIL,
  RESTORE_TRASH_MAIL
} from "../actions/delete.js";

let initialState = {};
initialState.id = 3001;
initialState.data = [
  {
    id: 3000,
    from: "user@tcs.com",
    to: "ievolve@tcs.com",
    subject: "Trash mail",
    folder: "sent",
    folderId: "2",
    time: "2018-01-23T18:25",
    body: "you can restore this" 
  }
];

export default (state = {}, action) => {
  switch (action.type) {
    case READ_TRASH_MAIL:
      return initialState;
      break;
    case STORE_TRASH_MAIL:

      if (action.payload.folder == "inbox") {
        var found = false;
        for (var i = 0; i < initialState.data.length; i++) {
          if (
            initialState.data[i].folderId == action.payload.folderId &&
            initialState.data[i].folder == "inbox"
          ) {
            found = true;
            break;
          }
        }
        if (!found) {
          var temp  = action.payload;
          temp.id = initialState.id;
          initialState.data.push(temp);
          initialState.id+=1;
          return initialState; 
        }
      } else {
         var temp  = action.payload;
        temp.id = initialState.id;
        initialState.data.push(temp);
        initialState.id+=1;
        return initialState; 
      }
      break;
    case RESTORE_TRASH_MAIL:
      initialState.data = initialState.data.filter(x => x.id !== action.payload);
      return initialState;
      break;
    default:
      return state;
  }
};