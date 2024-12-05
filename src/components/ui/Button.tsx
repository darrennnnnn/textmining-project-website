import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    borderWidth: number;
}

export default function Button({
    children,
    className = "",
    borderWidth = 4,
}: Readonly<ButtonProps>) {
    return (
        <button
            className={`cursor-pointer transition-colors duration-75 active:translate-x-[2px] active:translate-y-[2px] 
                     border-${borderWidth} ${className} active:shadow-[${borderWidth}px_${borderWidth}px_0px_black] shadow-[${
                borderWidth + 2
            }px_${borderWidth + 2}px_0px_black]`}
        >
            {children}
        </button>
    );
}
