  import React from "react";
  import { FaSquareXTwitter } from "react-icons/fa6";
  import { FaFacebook } from "react-icons/fa";
  import { FaInstagramSquare } from "react-icons/fa";
  import { Link } from "react-router-dom";

  export default function Contact() {
    return (
      <div className="w-full font-sans mt-[70px]">
        <div className="flex flex-wrap justify-center max-w-[1320px] mx-auto relative">
          {/* Form Section */}
            <form className="w-full md:w-5/12 z-0">
            <div className="bg-white max-w-[450px] text-center p-10 shadow-md rounded-lg mt-24 mb-16 mx-auto">
              <div className="text-left md:text-center mb-6">
                <p className="text-4xl md:text-3xl font-extrabold leading-tight text-orange-500">
                  Liên hệ với chúng tôi
                </p>
                <p className="text-gray-500 mt-2 hidden md:block">
                  Hãy để lại thông tin, chúng tôi sẽ phản hồi bạn trong thời gian
                  sớm nhất.
                </p>
              </div>

              <div className="space-y-6">
                {/* First Name */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">HỌ VÀ TÊN</p>
                  <input
                    type="text"
                    name="FirstName"
                    placeholder="Nhập họ và tên..."
                    className="w-full h-12 px-4 border-2 border-gray-200 text-black text-base rounded-md focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">EMAIL</p>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Nhập địa chỉ email..."
                    className="w-full h-12 px-4 border-2 border-gray-200 text-black text-base rounded-md focus:outline-none"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">SỐ ĐIỆN THOẠI</p>
                  <input
                    type="tel"
                    name="PhoneNumber"
                    placeholder="Nhập số điện thoại..."
                    className="w-full h-12 px-4 border-2 border-gray-200 text-black text-base rounded-md focus:outline-none"
                  />
                </div>

                {/* Query */}
                <div>
                  <p className="text-sm text-gray-400 mb-1">NỘI DUNG LIÊN HỆ</p>
                  <textarea
                    placeholder="Bạn cần hỗ trợ gì?"
                    className="w-full min-h-[150px] px-4 py-5 border-2 border-gray-200 text-base rounded-md focus:outline-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-b from-orange-400 to-orange-500 h-14 text-lg font-bold text-white rounded-full hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer mt-6"
              >
                Gửi thông tin
              </button>
            </div>
          </form>

          {/* Map + Social Section */}
          <div className="w-full md:w-7/12 flex flex-col items-center md:items-start mt-10 md:mt-0 pt-[130px]">
            <div className="w-full">
              <p className="text-orange-500 font-extrabold text-xl mb-2">
                Địa chỉ liên hệ
              </p>
              <p className="max-w-xs mb-5 text-gray-600">
                Liên hệ với chúng tôi để được tư vấn miễn phí và hỗ trợ nhanh
                chóng!
              </p>

              {/* Social Links */}
              <div className="flex space-x-6 mb-6">
                <a href="#">
                  <FaSquareXTwitter className="w-8 h-8" />
                </a>
                <a href="#">
                  <FaFacebook className="w-8 h-8" />
                </a>
                <a href="#">
                  <FaInstagramSquare className="w-8 h-8" />
                </a>
              </div>

              {/* Map Box */}
              <div className="w-full max-w-[800px] h-[320px] md:h-[520px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1473248572042!2d106.65184127583863!3d10.800026358756407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175292976c117ad%3A0x5b3f38b21051f84!2zSOG7jWMgVmnhu4duIEjDoG5nIEtow7RuZyBWaeG7h3QgTmFtIENTMg!5e0!3m2!1svi!2s!4v1763177913539!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
