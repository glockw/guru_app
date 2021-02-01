import { gql, useQuery } from "@apollo/client";

export const useSearch = (location, term) => {
  const businnesQuery = (location, term) => gql`
  {
    search(term: "${term}", location: "${location}", limit: 10) {
      total
      business {
        id
        name
        photos
        phone
        rating
        review_count
        location {
          address1
          address2
          city
          state
          country
          formatted_address
        }
      }
    }
  }
`;

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    businnesQuery(location, term),
    {
      notifyOnNetworkStatusChange: true,
    }
  );

  return {
    loading,
    error,
    fetchMore,
    networkStatus,
    data,
  };
};
