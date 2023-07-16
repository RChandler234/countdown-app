import Link from "next/link";
import { prisma } from "../db";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

const createMovie = async (data: FormData) => {
  "use server";

  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.movie.create({ data: { title, complete: false } });

  redirect("/movies");
};

const New = () => {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">New Movie</h1>
      </header>
      <form action={createMovie} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-slate-100 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex gap-1 justify-end">
          <Link
            href="/movies"
            className="border border-slate-100 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-100 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
};

export default New;
