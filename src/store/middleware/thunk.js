// instead npm i redux-thunk
// and no need to add this manually created middleware
// eslint-disable-next-line
export default store => next => action => {
    console.log("action >>> ",action)
    typeof action == 'function' 
    ? action(store.dispatch, store.getState)
    : next(action);
}