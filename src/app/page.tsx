"use client";

import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Home = () => {
  const diff = new Date("8/13/2023").getTime() - new Date().getTime();
  const woooo = diff <= 0 || diff / (1000 * 3600 * 24) < 1;
  const timeDiff = Math.abs(diff);
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  const notes = [
    "Kiss",
    "Cuddle",
    "Hwack",
    "Hug",
    "Make Food Together",
    "Go on Cute Dates",
    "Sleep at the Same Time!!",
    "Do Laundry Together",
    "Have Movie Nights",
    "Vanquish our Enemies >:)",
    "Have Tickle Fights",
    "Game Together",
    "Have Nap Dates",
    "Go to Concerts",
    "Ride the T Together",
    "Eat Pizza by the River",
    "Bike Around Boston",
    "Show Each Other Memes (In Person!)",
    "Workout Together",
    "Go On Movie Dates",
    "Have lil Dance Parties",
    "Have Board Game Nights!",
  ];

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Home</h1>
        <Link
          className="border border-slate-100 text-slate-100 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/movies"
        >
          Movies
        </Link>
      </header>
      <Box
        sx={{
          display: "flex",
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {woooo ? (
          <Typography sx={{ fontSize: 100 }}>
            WELCOME BACK!! I LAVA UUU
          </Typography>
        ) : (
          <Stack sx={{ display: "flex", alignItems: "center" }}>
            <Typography sx={{ fontSize: 300 }}>{diffDays}</Typography>
            <Typography sx={{ fontSize: 20 }}>{`Days Until We Get To ${
              notes[Math.max(0, Math.min(22, diffDays) - 1)]
            }`}</Typography>
          </Stack>
        )}
      </Box>
    </>
  );
};

export default Home;
