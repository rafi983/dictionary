import React from "react";

const EmptyMode: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center h-56">
      <h1 className="text-cpurple text-2xl text-center">
        No Search entered yet
      </h1>
      <p className="text-emerald-500 text-center">
        Try out our wonderful Dictionary by Entering a new search
      </p>
    </section>
  );
};
export default EmptyMode;
