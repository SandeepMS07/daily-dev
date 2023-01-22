import { HiBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <header className="p-4 sm:p-5 sticky top-0 bg-black shadow-2xl">
        <span className="mx-2 sm:mx-6 flex items-center justify-between 2xl:justify-around">
          <span>
            <p className="text-white ml-2 font-semibold">
              <button>Daily.Dev/blog</button>
            </p>
          </span>
          <span className="uppercase font-semibold hidden sm:flex items-center justify-evenly sm:gap-x-8">
            <span className="text-gray-400 flex items-center sm:gap-x-6">
              <span>
                <button className="uppercase">option-1</button>
              </span>
              <span>
                <button className="uppercase">option-2</button>
              </span>
              <span>
                <button className="uppercase">option-3</button>
              </span>
            </span>
            <span className="text-white font-bold border-2 p-4 px-6 rounded-2xl">
              <button className="uppercase"> Subscribe now</button>
            </span>
          </span>
          <span className=" sm:hidden">
            <HiBars3CenterLeft className="text-white font-bold text-3xl" />
          </span>
        </span>
      </header>
    </>
  );
};

export default Navbar;
