"use client";

import { useEffect, useState } from "react";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { AnimeProp } from "@/components/AnimeCard";
import AnimeGrid from "./AnimeGrid";

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView({});
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <AnimeGrid data={data} />
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
