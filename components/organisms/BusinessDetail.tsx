import _ from "lodash";
import moment from "moment";
import { BussinesExtended, Hours, MapDate } from "../../models";
import ImageHolder from "../atoms/ImageHolder";
import DescriptionDetail from "../molecules/DescriptionDetail";
import Reviewer from "./Reviewer";
export default function BusinessDetail({ item }: { item: BussinesExtended }) {
  const src = item.photos[0];
  const atl = item.name;

  const { hours } = item;

  const current_date = hours.find((c) => c.current);
  const days = _.groupBy(hours, (h) => h.day);

  const c = Object.entries(days).map(([day, h]) => ({
    day: MapDate[day],
    hours: h as Hours[],
    current: current_date.day == +day,
  }));
  const currentTime = +moment(Date.now()).format("hhmm");

  const isOpen = hours.some(
    (h) =>
      h.current && h.start_number <= currentTime && h.end_number > currentTime
  );

  return (
    <>
      <div className="container-detail">
        <div className="card">
          <DescriptionDetail item={item} />
          <ImageHolder {...{ src, atl }} />
          {item.is_closed && <span> Is Closed </span>}
        </div>

        <div className="card-min right">
          <div className={isOpen && "today"}>{isOpen ? "OPEN" : "CLOSED"}</div>

          <div className="hour_d">
            {c.map(({ day, current, hours }, index) => (
              <div className={`hour_dr`} key={`day__${index}`}>
                <div className={`day ${current && "today"}`}>{day}</div>

                <ul>
                  {hours.map(({ start, end }, index) => (
                    <li key={`h__${index}`}>
                      {start} - {end}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="col right">
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
          .hour_dr {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 0.2em;
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
          }
          .hour_d {
            display: flex;
            width: 90%;
            margin: 0 auto;
            flex-direction: column;
            align-items: center;
            padding: 2em 0;
          }
          .span_h {
            font-size: 16px !important;
          }

          .hours {
            display: flex;
          }
          ul {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            list-style-type: none;
            padding: 0;
            margin: 0;
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
        `}
      </style>
    </>
  );
}
