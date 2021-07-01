import { MiniPhoto } from "src/components/MiniPhoto";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const albums = await res.json();

  const paths = albums.map((album) => {
    return {
      params: {
        albumId: `${album.albumId}`,
      },
    };
  });

  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.albumId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const album = await res.json();

  return {
    props: { album },
    revalidate: 60 * 60,
  };
};

const Album = (album) => {
  const router = useRouter();
  const albumArray = Object.entries(album)
  console.log(albumArray);


  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-screen-md mt-20 mx-auto text-center mb-10">
      <h1 className="text-2xl font-bold">Choose a Photo</h1>
      <ul className="mt-10 flex flex-wrap gap-5">

        {/* {Object.keys(album).map(photo => {
          return (
            <MiniPhoto
              key={album[photo].id}
              src={album[photo].thumbnailUrl}
              title={album[photo].title}
            />
          );
        })} */}

      </ul>
    </div>
  );
};

export default Album;
