import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import useInterval from "../lib/useInterval";

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

  return <Layout>''</Layout>;
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

export default IndexPage;
