export function setSearchResults(results) {
  return (dispatch) => {
    dispatch({
      type: "SET_SEARCH_RESULTS",
      payload: results,
    });
  };
}
