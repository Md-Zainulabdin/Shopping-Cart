import { BsFillCartCheckFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full">
      <nav className="w-full h-[90px] bg-blue-500 text-white flex items-center justify-between px-[60px]">
        <div className="title">
          <Link href="/"><h1 className="text-2xl font-semibold">Shopping Cart</h1></Link>
        </div>
        <div className="cart cursor-pointer">
            <BsFillCartCheckFill className="text-2xl"/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
