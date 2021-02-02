import { useDispatch } from "react-redux";
import Clock from "../components/Clock";
import Counter from "../components/Counter";
import Layout from "../components/Layout";

const ReduxPage = () => {
  // Tick the time every second
  const dispatch = useDispatch();

  return (
    <Layout>
      <Clock />
      <Counter />
    </Layout>
  );
};

// export async function getStaticProps() {
//   const reduxStore = initializeStore(null);
//   const { dispatch } = reduxStore;

//   dispatch({
//     type: "TICK",
//     light: true,
//     lastUpdate: Date.now(),
//   });

//   return {
//     props: {
//       initialReduxState: reduxStore.getState(),
//     },
//     revalidate: 1,
//   };
// }

export default ReduxPage;
