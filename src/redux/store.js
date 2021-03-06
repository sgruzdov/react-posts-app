import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

import postsReducer from './reducers/postsReducer'
import authReducer from './reducers/authReducer'

const reducer = combineReducers({
    auth: authReducer,
    posts: postsReducer,
    form: formReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store