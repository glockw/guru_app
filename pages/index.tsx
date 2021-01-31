import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Businesses from "../components/organisms/Businesses";
import { initializeApollo } from "../lib/apollo";
import { Business } from "../models";
const allPostsQueryVars = {
  term: "taco",
  location: "nyc",
};
const ALL_POSTS_QUERY = gql`
  query Search($term: String!, $location: String!) {
    search(term: $term, location: $location, limit: 10) {
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
const IndexPage = () => {
  // Tick the time every second

  const { loading, data, error } = useQuery(ALL_POSTS_QUERY, {
    variables: allPostsQueryVars,
    notifyOnNetworkStatusChange: true,
  });
  // const { loading, data, fetchMore, error, networkStatus } = useQuery(
  //   ALL_POSTS_QUERY,
  //   {
  //     variables: allPostsQueryVars,
  //     // Setting this value to true will make the component rerender when
  //     // the "networkStatus" changes, so we are able to know if it is fetching
  //     // more data
  //     notifyOnNetworkStatusChange: true,
  //   }
  // );

  // if (error) return <ErrorMessage message={"Error loading posts."} />;
  if (loading) return <div>Loading</div>;

  const { business }: { business: Business[] } =
    data && data.search ? data.search : [];
  return (
    <Layout>
      <Nav />
      <Businesses data={business} />
    </Layout>
  );
};

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_POSTS_QUERY,
    variables: allPostsQueryVars,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}

export default IndexPage;
