import Link from "next/link";
import { prisma } from "../db";
import MovieItem from "@/components/MovieItem";

const toggleTodo = async (id: string, complete: boolean) => {
  "use server";

  await prisma.movie.update({ where: { id }, data: { complete } });
};

const Movies = async () => {
  const movies = await prisma.movie.findMany();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Movies / TV Shows</h1>
        <div>
          <Link
            className="border border-slate-100 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 mr-2 focus-within:bg-slate-700 outline-none"
            href="/"
          >
            Home
          </Link>
          <Link
            className="border border-slate-100 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            href="/new-movie"
          >
            Add Movie
          </Link>
        </div>
      </header>
      <ul className="pl-4 float-left clear-both">
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
};

export default Movies;
