import { useDispatch } from "react-redux";
import Layout from "../../components/Layout";
import BusinessDetail from "../../components/organisms/BusinessDetail";
import { getBusiness } from "../../lib/api";
import { BUSINESS_VISITED } from "../../redux/actions";

export default function Business({ business }) {

  return (
    <Layout notHome>
      <div>
        <BusinessDetail item={business} />
        <style jsx>
          {`
            div {
              margin: 2em 0;
            }
          `}
        </style>
      </div>
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
