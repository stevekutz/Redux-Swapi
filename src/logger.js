// How to create a redux event logger from scratch
// Takes in 3 functions:
//  The first function takes the "store" as a parameter
// the second takes a "next" function as a parameter
//  the third takes the "action" dispatched as a parameter.

export const logger = store => next => action => {
  // do something with the action here, and then don't forget to call next!
  console.group(action.type) // action.type is the label for what we're returning
  console.log("Prev State: ", store.getState())
  console.log("Action: ", action)
  next(action) // first thing is to call next function - or else get unexpected non-err code errors. Not always calling an action
  console.log("New State: ", store.getState())
  console.groupEnd()
}

// export const logger = store => next => action => {
//   console.group(action.type);
//   console.log('Prev State: ', store.getState());
//   console.log('Action: ', action);
//   next(action);
//   console.log('New State: ', store.getState());
//   console.groupEnd();
// };
