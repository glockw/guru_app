import { FETCH_BUSINESS_STARTED, FETCH_BUSINESS_SUCCEEDED } from "./actions";
export const initialState = {
  total: 0,
  business: [],
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
      return {
        ...state,
        isLoading: false,
        total: action.payload.total,
        business: action.payload.business,
      };
    default: {
      return initialState;
    }
  }
};
