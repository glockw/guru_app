import InputWide from "../atoms/input_wide";

export default function Filter() {
  return (
    <>
      <div className="nav">
        <InputWide />
      </div>
      <style jsx>
        {`
          .nav {
            width: 100vw;
            background-color: blue;
          }
        `}
      </style>
    </>
  );
}
