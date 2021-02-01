export default function Schedule({ schedule }) {
  return (
    <>
      <div className="hour_d">
        {schedule.map(({ day, current, hours }, index) => (
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
