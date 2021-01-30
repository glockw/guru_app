const Input = ({ hook, noBorder }) => {
  return (
    <>
      <input className={noBorder && "noBorder"} {...hook}></input>
      <style jsx>
        {`
          .noBorder {
            border: none;
            outline: none;
            width: 100%;
          }
        `}
      </style>
    </>
  );
};

export default Input;
