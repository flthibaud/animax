import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

interface AnimeGridProps {
  data: AnimeProp[];
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ data }) => (
  <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
    {data.map((item: AnimeProp, index: number) => {
      const adjustIndex = index % 8;
      return <AnimeCard key={item.id} anime={item} index={adjustIndex} />;
    })}
  </section>
);

export default AnimeGrid;
