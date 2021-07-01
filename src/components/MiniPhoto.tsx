import type { VFC } from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

export const MiniPhoto: VFC<Props> = (props) => {
  return (
    <>
      <li className="border-2 border-blue-300 max-w-xxs p-3">
        <Link href="/">
          <a>
            <Image src={props.src} alt={props.title} width={150} height={150} />
            <h2 className="overflow-hidden text-sm">{props.title}</h2>
          </a>
        </Link>
      </li>
    </>
  );
};
