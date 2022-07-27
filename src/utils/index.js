const API_URL = "https://reststop.randomhouse.com/resources/";

const APIMethodDetails = {
  // works: { keyParam: "keyword" }, no results
  titles: { keyParam: "keyword" },
  authors: { keyParam: "lastName" },
};

function createUrls(searchTerm = "") {
  return Object.keys(APIMethodDetails).reduce((urls, key) => {
    if (APIMethodDetails[key]) {
      urls = [
        ...urls,
        `${API_URL}${key}?max=5&${APIMethodDetails[key].keyParam}=${searchTerm}`,
      ];
    }
    return urls;
  }, []);
}

const options = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  mode: "cors",
  body: null,
};

const fetchJson = (url) => fetch(url, options).then((res) => res.json());

/**
 * Returns stored search data if it exists
 * @param {string} query
 * @returns {Object|null}
 */
export function getStoredSearch(query, searches) {
  let searchData = searches[query.toLowerCase()];
  return searchData || null;
}

export function searchRequest(searchTerm) {
  return Promise.all(createUrls(searchTerm).map(fetchJson))
    .then((results) => {
      const filteredResult = results.filter((res) => res.title || res.author);
      return filteredResult;
    })
    .catch((error) => {
      console.error("Promise all", error);
    });
}
