import Link from "next/link";
import Image from "next/image";
import {MiniPhoto } from "src/components/MiniPhoto"

// export const getStaticPaths = () => {

// }

// export const getStaticProps = () => {

// }

const Album = () => {
  return (
    <div className="max-w-screen-md mt-20 mx-auto text-center mb-10">
      <h1 className="text-2xl font-bold">Choose a Photo</h1>
      <ul className="mt-10 flex flex-wrap gap-5">
        <MiniPhoto
          src="https://via.placeholder.com/150/92c952"
          title="accusamus beatae ad facilis cum similique qui sunt"
        />

        <li className="border-2 border-blue-300 max-w-xxs p-3">
          <Link href="/">
            <a>
              <Image
                src="https://via.placeholder.com/150/92c952"
                alt="accusamus beatae ad facilis cum similique qui sunt"
                width={150}
                height={150}
              />
              <h2 className="overflow-hidden text-sm">
                accusamus beatae ad facilis cum similique qui sunt
              </h2>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Album;
