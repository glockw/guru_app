import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Businesses from "../components/organisms/Businesses";
import { getBusiness } from "../lib/api";

const IndexPage = ({
  data: {
    search: { business },
  },
}) => {
  const [bus, setBus] = useState(business);

  const onSearch = async (term, location) => {
    const {
      search: { business },
    } = await getBusiness(term, location);
    setBus(business);
  };
  return (
    <Layout>
      <Nav onSearch={onSearch} />
      <Link href="/bus/[id]" as="/bus/world">
        <a>Hello world</a>
      </Link>
      <Businesses data={bus} />
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getBusiness("pizza", "nyc");
  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

export default IndexPage;
