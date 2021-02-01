import { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Businesses from "../components/organisms/Businesses";
import { getBusinesses } from "../lib/api";

const IndexPage = ({
  data: {
    search: { business },
  },
}) => {
  const [bus, setBus] = useState(business);

  const onSearch = async (term, location) => {
    const {
      search: { business },
    } = await getBusinesses(term, location);
    setBus(business);
  };
  return (
    <Layout>
      <Nav onSearch={onSearch} />
      
      <Businesses data={bus} />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getBusinesses("pizza", "nyc");
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default IndexPage;
