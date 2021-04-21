import Head from "next/head";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const inputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* header left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* header right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Image</p>
          <ViewGridIcon className="h-10 w-10 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://avatars.githubusercontent.com/u/59042228?v=4" />
        </div>
      </header>
      {/* Body */}
      <form className="flex flex-col items-center flex-grow mt-44 w-4/5">
        <Image
          height="100"
          width="300"
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        />
        <div className="flex w-full mt-5 hover:shadow-lg rounded-full focus-within:shadow-lg max-w-md border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 justify-center mt-8 space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I am Lucky for Fun
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
