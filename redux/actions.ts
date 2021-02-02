import { getBusinesses } from "./../lib/api";
export const FETCH_BUSINESS_SUCCEEDED = "FETCH_BUSINESS_SUCCEEDED";
export const FETCH_BUSINESS_STARTED = "FETCH_BUSINESS_STARTED";
export const FETCH_MORE_BUSINESS_STARTED = "FETCH_MORE_BUSINESS_STARTED";

const DEFAULT_SEARCH = "PIZZA";
const DEFAULT_LOCATION = "NYC";

export const fetch_business = (term, location) => async (dispatch) => {
  dispatch({
    type: FETCH_BUSINESS_STARTED,
  });
  term = term ? term : DEFAULT_SEARCH;
  location = location ? location : DEFAULT_LOCATION;
  const data = await getBusinesses(term, location);
  dispatch({
    type: FETCH_BUSINESS_SUCCEEDED,
    payload: {
      ...data.search,
    },
  });
};



