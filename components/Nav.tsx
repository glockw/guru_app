
import Filter from "./organisms/Filter";

const Nav = () => {
 

  return (
    <header>
      <Filter />
      <div></div>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </header>
  );
};

export default Nav;
