import Link from "next/link";
import { Business } from "../../models";
import DescriptionDetail from "./DescriptionDetail";

const GridItem = (item: Business) => {
  return (
    <>
      <div className="property-card">
        <div className="property-go">
          <Link
            href={{
              pathname: "/business/[id]",
              query: { id: item.id },
            }}
          >
            <a className="go-to" href="#">
              {item.name}
            </a>
          </Link>
        </div>

        <div className="property-image">
          <div className="property-image-title"></div>
        </div>

        <div className="property-description">
          <DescriptionDetail item={item} />
        </div>
      </div>

      <style jsx>
        {`
          * {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
          }

          h5 {
            margin: 0px;
            padding-bottom: 0px;
            font-size: 1.2em;
            font-weight: 700;
          }

          p {
            font-size: 12px;
          }

          .go-to {
            text-decoration: none;
            font-size: 1.2em;
            font-weight: 700;
          }
          /* End Non-Essential  */

          .property-card {
            margin: 15px;
            height: 18em;
            width: 14em;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            position: relative;
            -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            border-radius: 16px;
            overflow: hidden;
            -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
            box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
          }
          /* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

          /* Top Half of card, image. */

          .property-go {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 4em;
            text-align: center;
            padding: 0.5em 1em;
          }

          .property-image {
            height: 6em;
            width: 14em;
            padding: 1em 2em;
            position: Absolute;
            top: 0;
            -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            background-image: url(${item.photos[0]});
            background-size: cover;
            background-repeat: no-repeat;
            object-fit: cover;
          }

          /* Bottom Card Section */

          .property-description {
            background-color: #fafafc;
            height: 12em;
            width: 14em;
            position: absolute;
            bottom: 0em;
            -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            padding: 0.5em 1em;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* Social Icons */

          .property-social-icons {
            width: 1em;
            height: 1em;
            background-color: black;
            position: absolute;
            bottom: 1em;
            left: 1em;
            -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
          }

          /* Property Cards Hover States */

          .property-card:hover .property-description {
            height: 0em;
            padding: 0px 1em;
          }
          .property-card:hover .property-image {
            top: 4em;
            height: 18em;
            width: 14em;
            background-size: cover;
            background-repeat: no-repeat;
          }

          .property-card:hover .property-social-icons {
            background-color: white;
          }

          .property-card:hover .property-social-icons:hover {
            background-color: blue;
            cursor: pointer;
          }
          .property-image-title {
            text-align: center;
            position: Relative;
            top: 30%;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
            color: black;
            font-size: 1.2em;
          }

          .property-card:hover .property-image-title {
            opacity: 1;
          }
        `}
      </style>
    </>
  );
};

export default GridItem;

// search(term: "burrito",
//          location: "san francisco") {
//     total
//     business {
//       name
//       rating
//       review_count
//       location {
//         address1
//         city
//         state
//         country
//       }
//     }
