import { BsFillCartCheckFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="w-full">
      <nav className="w-full h-[90px] bg-blue-500 text-white flex items-center justify-between px-[60px]">
        <div className="title">
          <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        </div>
        <div className="cart cursor-pointer">
            <BsFillCartCheckFill className="text-2xl"/>
        </div>
      </nav>
    </div>
  );
};

export default Header;
