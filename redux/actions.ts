import { getBusinesses } from "./../lib/api";
export const FETCH_BUSINESS_SUCCEEDED = "FETCH_BUSINESS_SUCCEEDED";
export const FETCH_FAILED = "FETCH_FAILED";

export const fetch_business = async (dispatch) => {
  const data = await getBusinesses("pizza", "nyc");
  dispatch({
    type: FETCH_BUSINESS_SUCCEEDED,
    payload: {
      ...data.search,
    },
  });
};
//Action Creator
