import { gql, NetworkStatus, useQuery } from "@apollo/client";
import { useDispatch } from "react-redux";
import ErrorMessage from "../components/ErrorMessage";
import Layout from "../components/Layout";
import Businesses from "../components/organisms/Businesses";
import { initializeApollo } from "../lib/apollo";
import useInterval from "../lib/useInterval";
import { Business } from "../models";
const allPostsQueryVars = {
  skip: 0,
  first: 10,
};

const ALL_POSTS_QUERY = gql`
  {
    search(term: "burrito", location: "san francisco", limit: 10) {
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
  const dispatch = useDispatch();

  useInterval(() => {
    dispatch({
      type: "TICK",
      light: true,
      lastUpdate: Date.now(),
    });
  }, 1000);

  const bussiness: Business[] = [new Business()];
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      variables: allPostsQueryVars,
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: true,
    }
  );

  console.log(error);
  const loadingMorePosts = networkStatus === NetworkStatus.fetchMore;

  // const loadMorePosts = () => {
  //   fetchMore({
  //     variables: {
  //       skip: allPosts.length,
  //     },
  //   });
  // };

  if (error) return <ErrorMessage message={"Error loading posts."} />;
  if (loading && !loadingMorePosts) return <div>Loading</div>;

  const { business }: { business: Business[] } = data.search;
  return (
    <Layout>
      <Businesses data={business} />
    </Layout>
  );
};

// export async function getStaticProps() {
//   const reduxStore = initializeStore()
//   const apolloClient = initializeApollo()
//   const { dispatch } = reduxStore

//   dispatch({
//     type: 'TICK',
//     light: true,
//     lastUpdate: Date.now(),
//   })

//   await apolloClient.query({
//     query: ALL_POSTS_QUERY,
//     variables: allPostsQueryVars,
//   })

//   return {
//     props: {
//       initialReduxState: reduxStore.getState(),
//       initialApolloState: apolloClient.cache.extract(),
//     },
//     revalidate: 1,
//   }
// }
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
