import React from 'react'
import Heading from "../Heading/Heading";
const Review = () => {
  return (

    <section className="animate-fade-in my-3 text-neutral-800 md:my-6 max-w-[1400px] mx-auto px-10 mb-5">
      {/* Tiêu đề + nút YouTube */}
      <div className="flex items-center justify-between gap-4 md:justify-start">
        <Heading highlight="Giới thiệu sản phẩm" heading="qua video" />
        <div className="hidden h-6 border-l border-neutral-300 md:block"></div>
        <a
          target="_blank"
          rel="nofollow"
          href="https://www.youtube.com/@CellphoneSOfficial"
          className="inline-flex items-center px-3 py-1.5 border rounded-full text-orange-500 hover:bg-neutral-50"
        >
          Xem kênh YouTube
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 512 512"
            className="ml-1 size-4"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="m184 112 144 144-144 144"
            ></path>
          </svg>
        </a>
      </div>

      {/* Grid sản phẩm */}
      <div className="mt-4 grid md:grid-cols-4 gap-4">
        {/* Sản phẩm 1 */}
        <div className="rounded-2xl shadow-md bg-white overflow-hidden">
          <div className="aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/Pc1P-Xch0YU"
              className="w-full h-full"
              allowFullScreen
              title="iPhone 17 Pro Max Review"
            ></iframe>
          </div>
          <a href="http://localhost:5173/detail?id=6920a5e7c80276b4b1c43c6f" className="flex gap-3 p-4">
            <img
              src="https://cellphones.com.vn/media/catalog/product/i/p/iphone-17-pro-max_3.jpg"
              alt="iPhone 17 Pro Max"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <p className="font-bold">iPhone 17 Pro Max 256GB | Chính hãng</p>
              <p className="text-orange-500 font-bold">37.990.000đ</p>
            </div>
          </a>
        </div>

        {/* Sản phẩm 2 */}
        <div className="rounded-2xl shadow-md bg-white overflow-hidden">
          <div className="aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/kIkGU-jGX7Y?si=e8I9KQBS34CuPTdP"
          
              className="w-full h-full"
              allowFullScreen
              title="Galaxy A17 5G Review"
            ></iframe>
          </div>
          <a href="http://localhost:5173/detail?id=6920fde6816a66e8f4d66d57" className="flex gap-3 p-4">
            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-a17-5g-blue-4.jpg"
              alt="Galaxy A17 5G"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <p className="font-bold">Galaxy A17 5G</p>
              <p className="text-orange-500 font-bold">5.990.000đ</p>
              <p className="text-xs text-gray-400 line-through">7.990.000đ</p>
            </div>
          </a>
        </div>

        {/* Sản phẩm 3 */}
        <div className="rounded-2xl shadow-md bg-white overflow-hidden">
          <div className="aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/Zm2H0eUGMcg?si=jeSWxvQyZqY3kWj"
              className="w-full h-full"
              allowFullScreen
              title="OPPO Find X9 Review"
            ></iframe>
          </div>
          <a href="http://localhost:5173/detail?id=69211f6703139eeb60c1f28e" className="flex gap-3 p-4">
            <img
              src="https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/9/x9.jpg"
              alt="OPPO Find X9"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <p className="font-bold">
               OPPO Find X9
              </p>
              <p className="text-orange-500 font-bold">19.990.000đ</p>
              <p className="text-xs text-gray-400 line-through">22.990.000đ</p>
            </div>
          </a>
        </div>

        {/* Sản phẩm 4 */}
        <div className="rounded-2xl shadow-md bg-white overflow-hidden">
          <div className="aspect-[9/16]">
            <iframe
              src="https://www.youtube.com/embed/2bm-fMuPrIY"
              className="w-full h-full"
              allowFullScreen
              title="Xiaomi 15T Review"
            ></iframe>
          </div>
          <a href="http://localhost:5173/detail?id=6920fb2b816a66e8f4d66cee" className="flex gap-3 p-4">
            <img
              src="https://cellphones.com.vn/media/catalog/product/x/i/xiaomi-15t-5g-22.jpg"
              alt="Xiaomi 15T"
              className="w-16 h-16 rounded-lg object-contain"
            />
            <div>
              <p className="font-bold">Xiaomi 15T 5G 12GB 512GB</p>
              <p className="text-orange-500 font-bold">14.490.000đ</p>
              <p className="text-xs text-gray-400 line-through">14.990.000đ</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Review
