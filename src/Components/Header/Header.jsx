// import { applyMiddleware, createStore } from "redux";
// import logger from 'redux-logger'

// const initialState = {
//   value: 0,
//   color: "yellow",
// };
// function appReducer(prevState = initialState, action) {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...prevState,
//         value: prevState.value + 1,
//       };
//     case "decrement":
//       return {
//         ...prevState,
//         value: prevState.value - 1,
//       };
//     case "green":
//       return {
//         ...prevState,
//         color:'green',
//       };
//     case "red":
//       return {
//         ...prevState,
//         color:'red',
//       };
//     default:
//       return prevState;
//   }
// }
// const store = createStore(appReducer,applyMiddleware(logger));
// export default store;
