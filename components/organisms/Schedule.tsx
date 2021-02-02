import _ from "lodash";
import { Hours, MapDate } from "../../models";
export default function Schedule({ schedule }) {
  const current_date = schedule.find((c) => c.current);
  const days = _.groupBy(schedule, (h) => h.day);
  const { is_overnight } = current_date;

  const mapHours = (start, end) =>
    is_overnight ? `${end} - ${start}` : `${start} - ${end}`;

  const flatted = Object.entries(days).map(([day, h]) => ({
    day: MapDate[day],
    hours: h as Hours[],
    current: current_date && current_date.day == +day,
  }));
  return (
    <>
      <div className="hour_d">
        {flatted.map(({ day, current, hours }, index) => (
          <div className={`hour_dr`} key={`day__${index}`}>
            <div className={`day ${current && "today"}`}>{day}</div>

            <ul>
              {hours.map(({ start, end }, index) => (
                <li key={`h__${index}`}>{mapHours(start, end)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .hour_dr {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 0.2em;
          }

          .today {
            color: green;
            font-weigth: bold;
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
        `}
      </style>
    </>
  );
}
