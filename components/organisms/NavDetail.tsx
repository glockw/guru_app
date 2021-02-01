export default function NavDetail({ photos }) {
  return (
    <div>
      <img src={photos[0]} />
      <style jsx>
        {`
          img {
            width: 100%;
            height: 15em;

            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
}
