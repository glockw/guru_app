import Filter from "./organisms/Filter";

export default function Nav({ onSearch }) {
  return (
    <header>
      <Filter onSearch={onSearch} />
      <div></div>
      <style jsx>{`
        header {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </header>
  );
}
