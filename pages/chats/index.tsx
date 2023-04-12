import { NextPage } from "next";
import ChatDetail from "./[id]";

const Chats: NextPage = () => {
  return (
    // <div className="py-10 divide-y-[1px]">
    //   {[1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
    //     <div
    //       key={i}
    //       className="flex mb-3  px-4 cursor-pointer pb-3 items-center space-x-3"
    //     >
    //       <div className="w-10 h-10 rounded-full bg-slate-300" />
    //       <div>
    //         <p className=" text-gray-700">Moko Lee</p>
    //         <p className="text-sm -gray-500">
    //           See you tomarrow in the corner at 2pm!
    //         </p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <ChatDetail />
  );
};
export default Chats;
