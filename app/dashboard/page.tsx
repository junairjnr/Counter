"use client";

import { useSearchParams } from "next/navigation";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const passedData = searchParams.get("tasks") ?? "";
  // const tasks = JSON.parse(passedData)
const  decode = decodeURIComponent(passedData)
  console.log(decode);
  

  return (
    <div className="w-full h-screen ">
      <Navbar />
      <div className="w-full h-screen flex justify-center pt-[50px] z-10 pb-[50px] p-3">
        {/* <h1>hello</h1> */}
        <div className="w-full p-2">
          <table className="w-full  border text-xl">
            <thead>
              <tr className="border bg-gray-300">
                <th className="border-r w-[250px]">Days</th>
                <th className="">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="w-[250px] border-r-2">Day 1</td>
                <td className=""></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
