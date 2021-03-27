// When app first renders redux does not contain any state so make 
//  sure to set a initial state (similar to this.state = { ... } in constructor)
const INITIAL_STATE = {
  currentUser: null
}

// ES6 for setting default param
const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        // spread op for state to carry over entire state
        ...state,
        // now update just what you need to update
        currentUser: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;