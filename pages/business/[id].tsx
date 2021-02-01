import Layout from "../../components/Layout";
import BusinessDetail from "../../components/organisms/BusinessDetail";
import { getBusiness } from "../../lib/api";

export default function Business({ business }) {
  return (
    <Layout notHome>
      <div className="container">
        <BusinessDetail item={business} />
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
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
