"use client";

import { useState, useEffect } from "react";
import { AiFillPlusSquare } from "react-icons/ai";
import Dashboard from "../dashboard/page";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const clearCount = () => {
    setCounter(0);
  };

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    date: "",
    text1: "",
    text2: "",
    text3: "",
  });

  const getData = tasks.map((x: any) => x.date);
  console.log(tasks);
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e: any) => {
    e.preventDefault();
    if (newTask.date.trim() !== "" && newTask.text1.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({ date: "", text1: "", text2: "", text3: "" });
    }
  };

  const clearLoacl = () => {
    // Remove tasks from local storage
    localStorage.removeItem("tasks");
    // Clear the tasks state
    setTasks([]);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen">
        <div className="flex justify-center items-center mt-2 flex-col pt-[50px]">
          <div className="flex flex-row  justify-center items-center">
            <div className="w-[450px] h-[100px] flex flex-row p-3">
              <div className="w-[75%] h-full bg-lime-100 flex justify-center items-center flex-row gap-3 rounded-lg">
                <p className="text-3xl font-bold">Counter</p>
                <div className="w-16 h-10 border flex justify-center items-center bg-gray-200 rounded-lg shadow-2xl">
                  <p className="text-3xl font-bold">{counter}</p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-sky-200 rounded-lg shadow-lg">
                <button
                  onClick={clearCount}
                  className="w-[100px] h-[50px] font-bold"
                >
                  Clear
                </button>
              </div>
              <div className="w-[25%] h-full bg-green-100 flex justify-center items-center rounded-lg">
                <button onClick={increment}>
                  <AiFillPlusSquare className="mt-1" size={50} />
                </button>
              </div>
            </div>
            <div className="w-[150px] h-[50px] flex justify-center items-center bg-cyan-200 mt-[10px] p-2 rounded-xl">
              <div className="flex">
                <Link
                  href={{
                    pathname: "/dashboard",
                    query: { tasks: JSON.stringify(tasks) },
                  }}
                >
                  <p>View</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-screen p-6">
            <div className="w-full h-screen">
              <form className="w-full flex justify-center">
                <div className="flex justify-center items-center border flex-col bg-gray-200 rounded-2xl shadow-2xl">
                  <p className="text-2xl font-bold p-2">Form</p>
                  <div className="w-[500px]">
                    <div className="flex flex-col p-8 justify-center items-center">
                      <div className=" flex flex-row gap-5 p-4">
                        <p className="text-lg font-bold">Date:</p>
                        <input
                          value={newTask.date}
                          onChange={(e) =>
                            setNewTask({ ...newTask, date: e.target.value })
                          }
                          type="date"
                          className="p-2 "
                        />
                      </div>
                      <div className=" flex flex-row gap-5 p-4">
                        <p className="text-lg font-bold">Dikr-1:</p>
                        <input
                          value={newTask.text1}
                          onChange={(e) =>
                            setNewTask({ ...newTask, text1: e.target.value })
                          }
                          type="text"
                          className="border"
                        />
                      </div>
                      <div className=" flex flex-row gap-5 p-4">
                        <p className="text-lg font-bold">Dikr-2</p>
                        <input
                          value={newTask.text2}
                          onChange={(e) =>
                            setNewTask({ ...newTask, text2: e.target.value })
                          }
                          type="text"
                          className="border"
                        />
                      </div>
                      <div className=" flex flex-row gap-5 p-4">
                        <p className="text-lg font-bold">Dikr-3:</p>
                        <input
                          value={newTask.text3}
                          onChange={(e) =>
                            setNewTask({ ...newTask, text3: e.target.value })
                          }
                          type="text"
                          className="border"
                        />
                      </div>
                      <div
                        className="flex justify-center items-center bg-sky-200 rounded-lg
                     shadow-lg"
                      >
                        <button
                          onClick={addTask}
                          className="w-[100px] h-[50px]"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-8 h-8 flex justify-center items-center bg-black text-white font-bold mb-[70px] first-letter:rounded-lg">
            <div className="flex">
              <button onClick={clearLoacl}>X</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
