const searchReducerDefaultState = {};

function searchReducer(state = searchReducerDefaultState, action = {}) {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return { ...state, data: action.payload };

    default:
      return state;
  }
}

export default searchReducer;
