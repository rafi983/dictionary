import React from "react";

const NotFound: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center  w-full">
      <h1 className="text-8xl mb-8  leading-none">😕</h1>
      <h2 className="text-xl font-bold font-inherit mb-6 text-dark2 dark:text-cwhite capitalize">
        no definitions found
      </h2>
      <p className="text-lg text-gray3 text-center">
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </section>
  );
};

export default NotFound;
