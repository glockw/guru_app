import Input from "../atoms/Input";

const InputWide = ({ hook, placeholder }) => {
  return (
    <>
      <div className="wide">
        <span className="pholder">{placeholder}</span>

        <Input hook={hook} noBorder />
      </div>

      <style jsx>{`
        .wide {
          padding: 0.5em;
          border: 1px solid grey;
          width: 20em;
          display: flex;
        }
        .pholder {
          color: #555;
          font-weight: 700;
          text-align: center;
          margin-left: 0.3em;
        }

        .noBorder {
          border: none;
          outline: none;
        }
        input {
          border: none;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default InputWide;
