import Filter from "./organisms/Filter";

export default function Nav({ onSearch }) {
  return (
    <header>
      <Filter onSearch={onSearch} />
      <style jsx>{``}</style>
    </header>
  );
}
