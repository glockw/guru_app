import { FETCH_BUSINESS_STARTED, FETCH_BUSINESS_SUCCEEDED } from "./actions";
export const initialState = {
  total: 0,
  business: [],
  term: "",
  location: "",
  offest: 0,
  isLoading: false,
};
export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BUSINESS_SUCCEEDED:
      const {
        payload: { term, location, total, business, offset },
      } = action;
      return {
        ...state,
        isLoading: false,
        term: term,
        location: location,
        offset: offset,
        total: total,
        business: business,
      };
    default: {
      return initialState;
    }
  }
};
