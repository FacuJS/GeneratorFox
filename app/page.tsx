'use client'
import { useState } from "react";
import type { MouseEventHandler } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { random } from 'lodash'
import { LazyImage } from "../components/RandomFox";
// generate simple unique id
const generateId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};
// random number from 1 to 122
const myRandom = () => random(1,123);

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItem>>([]);
  const addNewFox: MouseEventHandler<HTMLButtonElement> = () => {
    const id = generateId();
    const url = `https://randomfox.ca/images/${myRandom()}.jpg`;
    setImages([...images, { id, url }]);
    window.plausible('Signup');
  };
  return (
    <div>
      <Head>
        <title>Random foxies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          defer
          data-domain="yourdomain.com"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <main>
        <div className="flex-col text-center my-5 ">
          <h1 className="text-orange-500 font-bold text-3xl">Do you like foxies?</h1>
          <button
            onClick={addNewFox}
            className="my-3 bg-gray-700 hover:bg-orange-400 hover:text-gray-700 text-orange-400 font-bold py-2 px-4 rounded-full"
          >
            Add new fox
          </button>
        </div>
        {images.map(({ id, url }, index) => (
          <div className="p-4" key={id}>
            <LazyImage
              src={url}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }}
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
      <footer></footer>
    </div>
  );
};
export default Home;