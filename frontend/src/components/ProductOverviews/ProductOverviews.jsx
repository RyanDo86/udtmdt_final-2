import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import striptags from "striptags";
import he from "he";

const API_BASE = import.meta.env.VITE_API_BASE || "/api";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProductOverviews = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const id = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}/products/detail/${id}`);
        if (!res.ok) throw new Error("Lỗi tải sản phẩm");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message || "Lỗi mạng");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Đang tải sản phẩm...</p>;
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;
  if (!product) return <p className="text-center mt-10">Không tìm thấy sản phẩm</p>;

  const handleAddToCart = async (productId) => {
    if (!localStorage.getItem("tokenUser")) {
      navigate("/login");
      return;
    }
    try {
      const res = await fetch(`${API_BASE}/cart/add/${productId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: 1 }),
        credentials: "include",
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        alert(body.message || "Thêm vào giỏ hàng thất bại");
        return;
      }
      alert("Đã thêm vào giỏ hàng");
    } catch {
      alert("Lỗi khi thêm vào giỏ hàng");
    }
  };

  const handleCheckout = async () => {
    try {
      const res = await fetch(`${API_BASE}/cart`, {
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        const data = await res.json();
        if (data.code === 200 && data.cart) {
          // setCartData(await refreshProductDetails(data.cart));
        }
      }
    } catch (err) {
      console.warn(err);
    }
    navigate("/checkout");
  };

  // 👉 Làm sạch description: bỏ thẻ HTML + decode entity
  const cleanText = product ? he.decode(striptags(product.description)) : "";

  return (
    <div className="bg-white mt-30">
      <div className="pt-6">
        <div className="flex justify-center mt-6">
          <img
            alt={product.title}
            src={product.thumbnail}
            className="rounded-lg object-cover h-[500px] w-auto"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 
                        lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] 
                        lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.title}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <p className="text-3xl tracking-tight text-gray-900">
              {product.price.toLocaleString()} VND
            </p>

            <div className="mt-6">
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <AiFillStar
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                      4 > rating ? "text-yellow-500" : "text-gray-200",
                      "w-5 h-5 shrink-0"
                    )}
                  />
                ))}
                <span className="ml-3 text-sm font-medium text-indigo-600">
                  117 Đánh giá
                </span>
              </div>
            </div>

            <form className="mt-10 space-y-4">
              <button
                type="button"
                onClick={() => handleAddToCart(product._id || product.id)}
                className="flex w-full items-center justify-center rounded-lg border border-gray-300 
      bg-white px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-100 
      focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Thêm vào giỏ hàng
              </button>

              <button
                type="button"
                onClick={handleCheckout}
                className="flex w-full items-center justify-center rounded-lg border border-transparent 
    bg-orange-500 px-8 py-3 text-base font-medium text-white hover:bg-orange-600 
    focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Mua
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r 
                          lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            <div>
              <div className="space-y-6">
                <h2 className="text-sm font-medium text-gray-900">Thông Số:</h2>

                {/* 👉 Hiển thị text đã làm sạch */}
                <div className="whitespace-pre-line text-base text-gray-900">
                 {cleanText}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">
                  Số lượng: {product.stock} sản phẩm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductOverviews;
