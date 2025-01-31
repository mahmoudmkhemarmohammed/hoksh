import { Suspense } from "react";

const PageSuspance = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-heightLayout">
          <div className="relative w-48 h-48 flex justify-center items-center">
            {/* Rings */}
            <div className="absolute w-full h-full border-8 border-transparent rounded-full border-b-purple-400 animate-rotate1"></div>
            <div className="absolute w-full h-full border-8 border-transparent rounded-full border-b-pink-500 animate-rotate2"></div>
            <div className="absolute w-full h-full border-8 border-transparent rounded-full border-b-cyan-400 animate-rotate3"></div>
            <div className="absolute w-full h-full border-8 border-transparent rounded-full border-b-yellow-400 animate-rotate4"></div>

            {/* Loading Text */}
            <h3 className="text-white text-lg font-semibold">loading</h3>
          </div>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export default PageSuspance;
