import { GlobeIcon } from "@heroicons/react/solid";
function Footer() {
  return (
    <footer className="grid w-full mt-20 divide-gray-300 text-sm text-gray-500 dark__mode">
      <div className="px-8 py-3">
        <p>Indonesia</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <GlobeIcon className="h-5 mr-1 text-green-700" />
          Sejak 2021
        </div>
        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p>Iklan</p>
          <p>Bissnis</p>
          <p>mencari kerja</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
