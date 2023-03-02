import { combineReducers } from "redux";
import holidayReducer from "./reducerHoliday";
import leaveReducer from "./reducerLeave";
import userReducer from "./reducerUser";

const rootReducer = combineReducers({
    holiday: holidayReducer,
    user: userReducer,
    leave:leaveReducer,

});

export default rootReducer;
