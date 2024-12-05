import React from "react";
import Button from "./ui/Button";

export default function Hero() {
    return (
        <div className="relative border-b-4 border-black bg-lime-400">
            <div className="p-4 lg:p-8 h-[70vh] lg:h-[800px] mx-auto max-w-screen-xl gap-4 flex flex-col items-center justify-center">
                <div className="bg-purple-200 border-black border-4 px-8 py-2 rounded-full font-bold hidden lg:block">
                    A Text Mining Final Project Assignment
                </div>
                <div className="w-full flex flex-col items-center gap-8 justify-center  border-4 border-black border-r-8 border-b-8 pt-12 md:pt-18 lg:pt-24 pb-12 bg-amber-100">
                    <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl black text-center px-2">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <div className="flex flex-col gap-4 items-center">
                        <p className="font-semibold text-lg lg:text-xl leading-loose text-center text-slate-600 px-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perspiciatis rem iure soluta fugit earum ullam
                            beatae magni harum praesentium consectetur.
                        </p>
                        <Button
                            className="rounded-xl bg-purple-400 border-black text-xl px-8 py-4 font-extrabold hover:bg-purple-500"
                            borderWidth={4}
                        >
                            Try It Now!
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
