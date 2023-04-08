import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-500 my-2">Grey Chair</span>
          <span className="font-semibold ">$19</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Tooly Table</span>
          <span className="font-semibold ">$19</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed border-l-0 border-r-0 border-b-0 border-gray-300">
          <span>Total</span>
          <span className="font-semibold ">$10</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto">
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl ">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
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
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="bg-white flex justify-between mb-5">
          <span className="font-semibold">Categories</span>
          <span className="text-gray-400">...</span>
        </div>
        <div className="flex ">
          <div className="bg-blue-500 p-3 text-center box-content mx-2 rounded-xl">
            <span className=" text-white">Chair</span>
          </div>
          <div className="bg-slate-200 p-3 text-center box-content mx-2 rounded-xl">
            <span>Table</span>
          </div>
          <div className="bg-slate-200 p-3 text-center box-content mx-2 rounded-xl">
            <span>Cupboard</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
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
            <div>
              <input type="radio" />
              <input type="radio" />
              <input type="radio" />
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
