import Cards from "../components/Cards";

const page = () => {
  return (
    <div className="">
      <div className="sm:m-5 flex items-center justify-center">
        {/* <div className="w-full">
          <div className="sm:w-1/3 mx-auto sm:mx-44">
            <h1 className="text-yellow-300 text-3xl sm:text-[70px] font-bold">
              daily.dev blog
            </h1>
            <h6 className="text-white sm:text-xl">
              We focus on industry leading platforms so that you can be prepared
              for your next skill. Then we teach all we can about them.
            </h6>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center p-2 gap-x-8">
        <Cards />
        <Cards />
      </div>
      {/* <div className="flex flex-col sm:flex-row items-center justify-center p-2 gap-x-8">
        <Cards />
        <Cards />
      </div> */}
    </div>
  );
};

export default page;
