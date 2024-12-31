'use client';

import { useWishlist } from "../context/wishlistcontext/page";
import Image from "next/image";


export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <main className="p-8 max-w-7xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-100 shadow-2xl rounded-lg">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-center text-xl text-gray-500">Your wishlist is empty. Start adding your favorite products!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 p-4 flex flex-col items-center justify-between"
            >
              <div className="relative w-auto h-72 overflow-hidden rounded-lg">
                <Image
                  src={product.thumbnail}
                  alt='product'
                  width={300}
                  height={300}
                  className="object-contain rounded-lg transform hover:scale-110 transition duration-300"
                />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-lg text-green-600">${product.price.toFixed(2)}</p>
              </div>
              <button
                className="mt-4 px-6 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-200"
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
              <button
                className="mt-4 px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-200"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
