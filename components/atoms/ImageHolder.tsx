export default function ImageHolder({ src, atl }) {
  const attr = { src, atl };

  return (
    <>
      <div>
        <img {...attr} />
      </div>
      <style jsx>
        {`
          img {
            width: 100%;
            height: 20em;
            object-fit: cover;
          }
        `}
      </style>
    </>
  );
}
