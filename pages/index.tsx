import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 dark xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
        <span className="font-semibold dark:text-white text-2xl">
          Select Item
        </span>
        <div className="flex justify-between my-2">
          <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
          <span className="font-semibold dark:text-white ">$19</span>
        </div>
        <div className="flex justify-between my-2">
          <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
          <span className="font-semibold dark:text-white ">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed border-l-0 border-r-0 border-b-0 border-gray-300">
          <span>Total</span>
          <span className="font-semibold ">$10</span>
        </div>
        <button className="mt-5 dark:bg-black dark:border-white dark:border bg-blue-500 text-white p-3 text-center rounded-xl w-3/4 mx-auto dark:hover:bg-white dark:hover:text-black hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
          Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="bg-blue-500 landscape:bg-teal-500 portrait:bg-indigo-600 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl ">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-gray-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between">
          <span>⬅</span>
          <div className="space-x-3">
            <span>⭐ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium  text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full border-none bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full border-none bg-indigo-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full border-none bg-teal-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center py-2 px-8 text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
