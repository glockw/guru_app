import moment from "moment";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BussinesExtended } from "../../models";
import { BUSINESS_VISITED } from "../../redux/actions";
import ImageHolder from "../atoms/ImageHolder";
import DescriptionDetail from "../molecules/DescriptionDetail";
import Reviewer from "./Reviewer";
import Schedule from "./Schedule";
export default function BusinessDetail({ item }: { item: BussinesExtended }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: BUSINESS_VISITED,
      payload: {
        id: item.id,
      },
    });
  }, []);
  const src = item.photos[0];
  const atl = item.name;

  const { hours } = item;

  const currentTime = +moment(Date.now()).format("HHmm");
  let isOpen = false;
  const is_night = hours.find((c) => c.is_overnight && c.current);
  if (is_night) {
    isOpen = hours.some(
      (h) =>
        h.current &&
        +h.start_number >= currentTime &&
        +h.end_number <= currentTime
    );
  } else {
    isOpen = hours.some(
      (h) =>
        h.current &&
        +h.start_number <= currentTime &&
        +h.end_number > currentTime
    );
  }

  return (
    <>
      <div className="container-detail">
        <div className="card-min left">
          <div className={isOpen && "today"}>{isOpen ? "OPEN" : "CLOSED"}</div>
          <Schedule schedule={hours} />
        </div>
        <div className="card">
          <DescriptionDetail item={item} />
          <span className="today"> {item.price}</span>
          {item.is_closed && <span> Is Closed </span>}
          <ImageHolder {...{ src, atl }} />
        </div>

        <div className="right">
          {item.reviews.map((review, index) => (
            <div key={index} className="card-min-width">
              <Reviewer review={review} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .container-detail {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
          }

          .card-full {
            padding: 1em 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 25em;

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

          .today {
            color: green;
            font-weigth: bold;
            font-size: 1em;
          }

          .some {
            margin: 24px 0;
          }
          .card {
            padding: 1em 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 25em;
            height: 30em;
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

          .card-min {
            padding: 1em 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 20em;
            height: auto;
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

          .card-min-width {
            padding: 1em 0;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 35em;
            height: auto;
            font-family: arial;
            margin-bottom: 0.5em;
            border: solid 3px black;
            -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            border-radius: 16px;
            overflow: hidden;
            -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
            box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
          }

          .left {
            margin-right: 20px;
          }
          .right {
            margin-left: 20px;
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

          @media (max-width: 1000px) {
            .container-detail {
              flex-direction: column;
              align-items: center;
            }
            .card-min-width {
              max-width: 20em;
              text-align: center;
            }

            .card {
              max-width: 20em;
              margin: 1em 0;
            }
            .right,
            .left {
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
}
