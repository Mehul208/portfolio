import "tailwindcss/tailwind.css";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <nav className="absolute w-full flex items-center flex-wrap bg-transparent z-10 p-5 ">
                <Link href="/">
                    <a className="inline-flex items-center p-2 mr-4 ">
                        <span className="text-xl text-teaser font-bold  tracking-wide">
                            Mehul Chauhan
                        </span>
                    </a>
                </Link>
                <button
                    onClick={handleClick}
                    className=" inline-flex p-3 hover:text-accent rounded lg:hidden text-white ml-auto hover:text-accent outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div
                    className={`${
                        active ? "" : "hidden"
                    }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                >
                    <div className="bg-background bg-opacity-90	 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto bg-text-background">
                        <Link href="/">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white items-center justify-center hover:text-accent hover:text-white ">
                                Home
                            </a>
                        </Link>
                        <Link href="#projects">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:text-accent hover:text-white">
                                Projects
                            </a>
                        </Link>
                        <Link href="#about">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white  items-center justify-center hover:text-accent hover:text-white">
                                About me
                            </a>
                        </Link>
                        <Link href="#contact">
                            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 mr-5 rounded text-white items-center justify-center hover:text-accent hover:text-white">
                                Contact me
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};
