const ErrorFetch = ({ error }: { error: string }) => {
  return (
    <div className="flex justify-center items-center flex-col gap-5 mt-24">
      <div className="relative w-[300px] h-[300px] mb-4 max-md:w-[150px] max-md:h-[150px]">
        <div className="absolute w-full h-full bg-red-500 rounded-full animate-ping"></div>
        <div className="absolute w-full h-full bg-red-500 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl">
          !
        </div>
      </div>

      <h2 className="text-xl text-white font-semibold">{error}</h2>
    </div>
  );
};

export default ErrorFetch;
