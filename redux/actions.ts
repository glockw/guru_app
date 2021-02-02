import { getBusinesses } from "./../lib/api";
export const FETCH_BUSINESS_SUCCEEDED = "FETCH_BUSINESS_SUCCEEDED";
export const FETCH_BUSINESS_STARTED = "FETCH_BUSINESS_STARTED";
export const FETCH_MORE_BUSINESS_STARTED = "FETCH_MORE_BUSINESS_STARTED";
export const FETCH_BUSINESS_FAILED = "FETCH_BUSINESS_FAILED";
export const BUSINESS_VISITED = "BUSINESS_VISITED";

const DEFAULT_SEARCH = "PIZZA";
const DEFAULT_LOCATION = "NYC";

const fetch_started = {
  type: FETCH_BUSINESS_STARTED,
};
export const fetch_business = (term, location) => async (dispatch) => {
  term = term ? term : DEFAULT_SEARCH;
  location = location ? location : DEFAULT_LOCATION;
  dispatch(fetch_started);
  try {
    const data = await getBusinesses(term, location);
    dispatch({
      type: FETCH_BUSINESS_SUCCEEDED,
      payload: {
        ...data.search,
        term,
        location,
        offset: 10,
      },
    });
  } catch (error) {
    dispatch({
      type: FETCH_BUSINESS_FAILED,
    });
  }
};

export const fetch_more = async (dispatch, getState) => {
  dispatch(fetch_started);
  const { offset, term, location, business } = getState();
  const data = await getBusinesses(term, location, offset);
  dispatch({
    type: FETCH_BUSINESS_SUCCEEDED,
    payload: {
      ...getState(),
      offset: offset + 10,
      business: business.concat(data.search.business),
    },
  });
};
