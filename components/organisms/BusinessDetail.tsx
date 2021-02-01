import ImageHolder from "../atoms/ImageHolder";
import DescriptionDetail from "../molecules/DescriptionDetail";

export default function BusinessDetail({ item }) {
  const src = item.photos[0];
  const atl = item.name;
  return (
    <>
      <div className="card">
        <DescriptionDetail item={item} />
        <ImageHolder {...{ src, atl }} />
      </div>
      <style jsx>
        {`
          .some {
            margin: 24px 0;
          }
          .card {
            padding: 1em 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 25em;
            height: 30em;
            margin: auto;
            text-align: center;
            font-family: arial;
            border: solid 3px black;
            -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            border-radius: 16px;
            overflow: hidden;
            -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
            box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
          }

          .title {
            color: grey;
            font-size: 18px;
          }

          button {
            border: none;
            outline: 0;
            display: inline-block;
            padding: 8px;
            color: white;
            background-color: #000;
            text-align: center;
            cursor: pointer;
            width: 100%;
            font-size: 18px;
          }

          a {
            text-decoration: none;
            font-size: 22px;
            color: black;
          }

          button:hover,
          a:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  );
}
