import Image from "next/image";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from "next";
import { PHOTO } from "src/utils/type";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
  const albums: PHOTO[] = await res.json();

  const paths = albums.map((album) => {
    return {
      params: {
        id: `${album.id}`,
      },
    };
  });

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?id=${id}`
  );
  const photo = await res.json();

  if (!photo) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { photo },
  };
};



const Photo = (photo: InferGetStaticPropsType<typeof getStaticProps>) => {

  return (
    <div className="max-w-screen-md mt-20 mx-auto text-center mb-10">
      <h1 className="text-2xl font-bold">
        Detailed Information of Selected Photo
      </h1>
      <div className="mt-5">
        <Image
          src={photo.photo[0].url}
          alt={photo.photo[0].title}
          width={250}
          height={250}
        />
        <h2 className="flex justify-center mt-4">
          <dt className="font-bold mr-1">Title:</dt>
          <dd>{photo.photo[0].title}</dd>
        </h2>
        <div className="flex justify-center mt-1">
          <dt className="font-bold mr-1">id: </dt>
          <dd>{photo.photo[0].id}</dd>
        </div>
      </div>
    </div>
  );
};

export default Photo;
