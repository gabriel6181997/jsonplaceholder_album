import { MiniPhoto } from "src/components/MiniPhoto";
import { useRouter } from "next/router";
import ReactLoading from "react-loading";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { PHOTO } from "src/utils/type";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const albums: PHOTO[] = await res.json();

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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.albumId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
  );
  const album = await res.json();

  if (!album) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { album },
    revalidate: 30,
  };
};

const Album = (album: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="max-w-screen-md mt-20 mx-auto text-center mb-10">
        <div className="text-center w-28 mx-auto">
          <ReactLoading type="spin" color="#60A5FA" height={100} width={100} />
        </div>
        <p className="mt-5 font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-md mt-20 mx-auto text-center mb-10">
      <h1 className="text-2xl font-bold">Choose a Photo</h1>
      <ul className="mt-10 flex flex-wrap justify-center gap-5">
        {album.album.map((photo: PHOTO) => {
          return (
            <MiniPhoto
              key={photo.id}
              src={photo.thumbnailUrl}
              title={photo.title}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Album;
