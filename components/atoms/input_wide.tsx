const InputWide = () => {
  return (
    <>
      <div className="bar">
        <input type="text" className="searchbar" />
        <img src="img/search.png" />
      </div>
      <style jsx>{`
        .bar {
          display: flex;
          justify-content: center;
          align-items: center;

          border-radius: 30px;
          border: 1px solid #dcdcdc;
        }
        .bar:hover {
          box-shadow: 1px 1px 8px 1px #dcdcdc;
        }
        .bar:focus-within {
          box-shadow: 1px 1px 8px 1px #dcdcdc;
          outline: none;
        }
        .searchbar {
          height: 40px;
          border: none;
          width: 500px;
          font-size: 16px;
          outline: none;
          left: 10px;
        }
        img {
          padding: 10px;
          cursor: pointer;
          position: absolute;
          height: 40px;
          width: 40px;
          right: 0;
          transform: translateX(-10px);
        }
        button {
          position: absolute;
          right: 0;
          height: 100%;
          width: 40px;
          border-radius: 30px;
        }
      `}</style>
    </>
  );
};

export default InputWide;
