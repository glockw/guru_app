import ReactLoading from "react-loading";
import { useSelector } from "react-redux";

export default function Loading({ color }) {
  const loading = useSelector((data) => data.isLoading);
  return (
    <>
      {loading && (
        <div className="loading">
          <ReactLoading color={color} type="balls" />
        </div>
      )}
      <style jsx>
        {`
          .loading {
            height: 20em;
            position: absolute;
            top: 40%;
            left: 50%;
            z-index: 40;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
    </>
  );
}
