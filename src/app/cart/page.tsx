'use client';

import { useCart } from "@/app/context/cartcontext/page";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-100 shadow-xl rounded-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col items-center justify-between"
              >
                <div className="relative w-auto h-72 overflow-hidden rounded-lg">
                  <Image
                    src={product.thumbnail}
                    alt="product"
                    width={300}
                    height={300}
                    className="object-contain rounded-lg transform hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="text-center mt-4">
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-lg text-green-600">${product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                  <span className="text-lg font-medium">{product.quantity}</span>
                  <button
                    className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200"
                    onClick={() =>
                      updateQuantity(product.id, Math.max(product.quantity - 1, 1))
                    }
                  >
                    -
                  </button>
                </div>
                <button
                  className="mt-4 px-6 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-200"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-800">Total: ${calculateTotal().toFixed(2)}</p>
            <Link href='/payment'>
            <button
              className="mt-4 px-6 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-200"
            >
              Proceed to Checkout
            </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
