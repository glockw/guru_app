const SearchButton = () => {
  return (
    <>
      <button>
        <span>
          Search
          <img src="img/search.png" />
        </span>
      </button>
      <style jsx>
        {`
          img {
            height: 2em;
          }
        `}
      </style>
    </>
  );
};

export default SearchButton;
