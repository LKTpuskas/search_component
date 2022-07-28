import debounce from "lodash/debounce";
import React, { useCallback, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

import OutsideClick from "../OutsideClick";
import { setSearchResults } from "../store/actions/searchResultActions";
import { StyledSearchForm, StyleInput } from "../styles/Search";
import { getStoredSearch, searchRequest } from "../utils";
import Dropdown from "./Dropdown";

function Search() {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searches, setSearches] = useState({});
  const [query, setQuery] = useState("");

  const search = useCallback(
    (query) => {
      setQuery(query);
      function searchSuccessHandler(data) {
        if (data?.length > 0) {
          dispatch(setSearchResults(data));
        } else {
          dispatch(setSearchResults([]));
        }
      }

      // Don't make the same search twice
      if (query && getStoredSearch(query, searches)) {
        searchSuccessHandler(getStoredSearch(query, searches));
      } else if (query?.length > 0) {
        searchRequest(query).then((data) => {
          searchSuccessHandler(data);
          setSearches(Object.assign(searches, { [query.toLowerCase()]: data }));
        });
      }
    },
    [dispatch, searches]
  );

  const searchRequesHandler = useMemo(() => debounce(search, 400), [search]);

  return (
    <OutsideClick
      onOutsideClick={() => {
        setSearchOpen(false);
      }}
    >
      <StyledSearchForm>
        <StyleInput
          placeholder="Quick search..."
          onClick={() => setSearchOpen(true)}
          onChange={({ target: { value } }) => searchRequesHandler(value)}
        />
        <Dropdown searchOpen={query?.length > 0 && searchOpen} />
      </StyledSearchForm>
    </OutsideClick>
  );
}

export default Search;
