import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col space-y-2 p-5">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">What is my fav. food.</summary>
          <span>김치</span>
        </details>
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <ul className="list-decimal marker:text-teal-500">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <input
          type="file"
          className=" file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:transition-colors file:border file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
        />
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <p className="first-letter:text-7xl first-letter:hover:text-purple-500">
          안녕 얘들아
        </p>
      </div>
    </>
  );
};

export default Home;
