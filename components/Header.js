import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";
function Header() {
  const searchInputRef = useRef(null);
  const router = useRouter();
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };
  return (
    <header className="sticky top-0 dark__mode w-full">
      <div className="flex w-full p-6">
        <Image
          src="/Doogle.png"
          height={10}
          width={170}
          onClick={() => router.push("/")}
          className="cursor-pointer hidden"
        />
        {/* FORM */}
        <form className="flex flex-grow px-6 py-3 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center ml-10 mr-5">
          <input
            ref={searchInputRef}
            type="text"
            className="dark__mode flex-grow w-full focus:outline-none text-gray-200"
            placeholder="Cari disini..."
          />
          <XIcon
            className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 " />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button type="submit" onClick={search} className="hidden">
            Search
          </button>
        </form>
        <Avatar
          className="ml-auto"
          url="https://avatars.githubusercontent.com/u/59042228?v=4"
        />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default Header;
