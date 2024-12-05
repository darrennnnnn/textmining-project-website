import React from "react";
import { FaKaggle } from "react-icons/fa";
import { TiArrowForward } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import Button from "./ui/Button";

export default function Resources() {
    return (
        <div className="border-black border-b-4 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="p-4 lg:p-8 min-h-[800px] mx-auto max-w-screen-2xl">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="font-bold tracking-wider text-center py-8 text-4xl md:text-6xl lg:text-7xl bg-red-500">
                        Lorem ipsum dolor sit amet.
                    </h2>
                    <p className="font-semibold text-lg lg:text-xl leading-loose text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quis deleniti, dolorem quas excepturi veritatis
                        fugiat repellat voluptatum at pariatur, recusandae
                        dolor! Molestiae quod ex maxime voluptates excepturi
                        consequatur rerum a ad id, assumenda odit ullam nihil
                        saepe distinctio velit iusto veniam amet eum tempora
                        libero vero ratione officia accusantium? Eum?
                    </p>
                    <div className="flex flex-col lg:flex-row gap-4 justify-center py-16">
                        <div className=" border-black border-4 border-r-8 border-b-8 rounded-lg h-96 w-full xl:w-1/4 px-4 py-12 mb-12 bg-orange-300 relative">
                            <div className="flex items-center justify-between">
                                <h4 className="text-3xl font-bold py-4">
                                    Dataset
                                </h4>
                                <Button
                                    className="flex items-center justify-center rounded-full w-32 bg-blue-400 hover:bg-blue-500 border-black text-xl px-4 py-2 font-semibold gap-2"
                                    borderWidth={2}
                                >
                                    <p>Visit</p>
                                    <TiArrowForward size={20} color="#000" />
                                </Button>
                            </div>

                            <p className="text-md font-semibold leading-loose text-slate-600 text-lg lg:text-xl">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Earum iusto iste ducimus
                                explicabo possimus repellendus, itaque odio
                                vitae animi voluptas asperiores corporis, fugit
                                eum est maiores aut expedita. Itaque,
                                consequatur.
                            </p>

                            <div className=" p-2 border-black border-4 absolute top-[-20px] bg-orange-400">
                                <FaKaggle size={30} color="#000" />
                            </div>
                        </div>
                        <div className=" border-black border-4 border-r-8 border-b-8 rounded-lg h-96 w-full xl:w-1/4 px-4 py-12 bg-orange-300 relative">
                            <div className="flex items-center justify-between">
                                <h4 className="text-3xl font-bold py-4">
                                    GitHub
                                </h4>
                                <Button
                                    className="flex items-center justify-center rounded-full w-32 bg-blue-400 hover:bg-blue-500 border-black text-xl px-4 py-2 font-semibold gap-2"
                                    borderWidth={2}
                                >
                                    <p>Visit</p>
                                    <TiArrowForward size={20} color="#000" />
                                </Button>
                            </div>

                            <p className="text-md font-semibold leading-loose text-slate-600 text-lg lg:text-xl">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Earum iusto iste ducimus
                                explicabo possimus repellendus, itaque odio
                                vitae animi voluptas asperiores corporis, fugit
                                eum est maiores aut expedita. Itaque,
                                consequatur.
                            </p>

                            <div className=" p-2 border-black border-4 absolute top-[-20px] bg-orange-400">
                                <FaGithub size={30} color="#000" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
}
