import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-20">
      <div className="flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10">
        {/* Logo + Giới thiệu */}
        <div className="flex-1 basis-[300px]">
          <a href="/" className="text-3xl font-bold">
            Lo<span className="text-orange-500 uppercase">g</span>o
          </a>
          <p className="text-zinc-600 mt-6 max-w-[450px]">
            Sứ mệnh của chúng tôi là mang đến những chiếc điện thoại chính hãng, chất lượng cao với giá cả hợp lý, giúp khách hàng tiếp cận công nghệ tiên tiến một cách dễ dàng
          </p>
          <p className="text-zinc-800 mt-6">
            © 2025. Website thuộc quyền sở hữu của Website Mobile Store
          </p>
        </div>

        {/* Cột Công ty */}
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Công ty</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Giới thiệu
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-600 hover:text-orange-500">
              Câu hỏi thường gặp
            </a>
          </li>
        </ul>

        {/* Cột Hỗ trợ */}
        <ul className="flex-1">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Hỗ trợ</h5>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-800 hover:text-orange-500">
              Trung tâm hỗ trợ
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-600 hover:text-orange-500">
              Góp ý
            </a>
          </li>
          <li className="mt-6">
            <a href="#" className="text-zinc-600 hover:text-orange-500">
              Liên hệ
            </a>
          </li>
        </ul>

        {/* Cột Kết nối */}
        <div className="flex-1">
          <h5 className="text-zinc-800 text-2xl font-bold">
            Kết nối với chúng tôi
          </h5>
          <p className="mt-6 text-zinc-600">
            Có câu hỏi hoặc góp ý?
            <br />
            Chúng tôi luôn sẵn sàng lắng nghe bạn.
          </p>
          <div className="flex bg-white mt-6 p-1 rounded-lg">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Nhập địa chỉ email..."
              className="h-[5vh] pl-4 flex-1 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer">
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
