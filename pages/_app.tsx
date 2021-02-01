import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { useApollo } from "../lib/apollo";
import { useStore } from "../lib/redux";

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}
