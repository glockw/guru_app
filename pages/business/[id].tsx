import Layout from "../../components/Layout";
import BusinessDetail from "../../components/organisms/BusinessDetail";
import { getBusiness } from "../../lib/api";

export default function Business({ business }) {
  return (
    <Layout notHome>
      <BusinessDetail item={business} />

      <style jsx>{``}</style>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const { business } = await getBusiness(id);
  return {
    props: {
      business,
    },
  };
}
