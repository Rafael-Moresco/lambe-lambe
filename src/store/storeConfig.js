import { legacy_createStore, combineReducers, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import userReducer from './reducers/user'
import postsReducer from './reducers/posts'
import messageReducer from './reducers/message'

const reducers = combineReducers({
    user: userReducer,
    posts: postsReducer,
    message: messageReducer
})

const storeConfig = () => {
    return legacy_createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig