import Image from "next/image";
import { ModeToggle } from "./darkMode";
import { IoIosLogOut } from "react-icons/io";
import { GiBookshelf } from "react-icons/gi";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

export default function Navbar() {
  return (
    <header className="header sticky top-0 bg-white dark:bg-black shadow-md flex items-center justify-between px-8 py-02">
      <h1 className="w-3/12">
        <Image src={"/logo.png"} height={50} width={70} alt={""} />
      </h1>
      <nav className="flex nav font-semibold text-lg">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
            <a href="/home">Home</a>
          </li>
          <li className="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer active">
            <a href="/books">Livros</a>
          </li>
          <li className="p-4 border-b-2 border-indigo-500 border-opacity-0 hover:border-opacity-100 hover:text-indigo-500 duration-200 cursor-pointer">
            <a href="/users">Usuários</a>
          </li>
        </ul>
      </nav>
      <div className="w-3/12 flex justify-end">
        <a href="/bookshelf">
          <GiBookshelf
            className="ml-2 hover:text-indigo-500 duration-200"
            size={35}
          />
        </a>

        <div className="ml-2">
          <ModeToggle />
        </div>
        <a href="/">
          <IoIosLogOut
            className="ml-2 hover:text-indigo-500 duration-200"
            size={35}
          />
        </a>
        <Avatar className="ml-2">
          <AvatarImage
            src="https://github.com/shadcn.png"
            className="rounded-full h-10 p-1"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
