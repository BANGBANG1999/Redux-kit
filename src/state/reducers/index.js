import { combineReducers } from "redux"

import amountReducer from "./amountReducer"

const reducers = combineReducers({
    amount : amountReducer  //we can add more reducers which will be export as one reducer
})

export default reducers