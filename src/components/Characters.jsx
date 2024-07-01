"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "@/app/loading";

function Characters() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        // Hacemos fetch y parseamos los datos a un json
        const response = await fetch("https://swapi.dev/api/people/");
        const data = await response.json();
        // Agregamos de otro sitio la propiedad imagenurl para obtener las imagenes de nuestro perfil
        const charactersWithImages = data.results.map((character, index) => ({
          ...character,
          imageUrl: `https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`,
        }));
        setCharacters(charactersWithImages);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="mx-auto mt-5 max-w-screen-xl">
      <h1 className="text-center text-4xl font-semibold text-white">
        Characters
      </h1>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-wrap justify-between rounded-3xl p-6">
          {characters.map((character, index) => (
            <div
              className="my-7 min-w-full rounded-3xl bg-gray-300 px-10 py-7"
              key={index}
            >
              <Link href={`/char/${index}`}>
                <h1 className="m-0 mb-3 max-w-fit text-3xl text-black xl:text-6xl">
                  {character.name}
                </h1>
              </Link>
              <div className="relative bottom-5 float-right mt-4 max-w-96">
                <Image
                  className="rounded-3xl"
                  src={character.imageUrl}
                  alt={character.name}
                  width={400}
                  height={400}
                  priority={true}
                />
              </div>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Height: {character.height}
              </p>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Mass: {character.mass}
              </p>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Hair Color: {character.hair_color}
              </p>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Skin Color: {character.skin_color}
              </p>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Eye Color: {character.eye_color}
              </p>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Birth Year: {character.birth_year}
              </p>
              <p className="text-gray-700 sm:mt-4 xl:mt-0 xl:text-xl">
                Gender: {character.gender}
              </p>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default Characters;
