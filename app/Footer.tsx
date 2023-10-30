import Link from "next/link";
import { AiFillHome, AiFillPlusSquare } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="w-full h-[50px] fixed bottom-0 bg-gray-300">
      <div className="flex justify-between items-center">
        <div className="w-[50%] justify-center items-center flex flex-row border-r-2">
        <Link href={"/dashboard"}>
          <div className="p-2 flex flex-row gap-3">
            <p className="text-2xl">List</p>
            <AiFillHome className="mt-1" size={25} />
          </div>
          </Link>
        </div>
        <div className="w-[50%] justify-center items-center flex flex-row ">
          <Link href={"/counter"}>
            <div className="p-2 flex flex-row gap-3">
              <p className="text-2xl">Counter</p>
              <AiFillPlusSquare className="mt-1" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
