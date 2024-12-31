import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import BillBoard from "@/components/BillBoard";
import FeaturedCategories from "@/components/FeaturedCategories";
import { FaStar, FaRegStar } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  images: string[];
  category: string;
  rating: number;
  brand: string;
}

const Rating = ({ rating }: { rating: number }) => {
  const filledStars = Math.round(rating); 
  const totalStars = 5;

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        index < filledStars ? (
          <FaStar key={index} className="text-yellow-500" />
        ) : (
          <FaRegStar key={index} className="text-yellow-500" />
        )
      ))}
      <span className="ml-2 text-gray-600">{rating}</span>
    </div>
  );
};

export default async function Home() {
  let popularProducts: Product[] = [];

  try {
    const res = await fetch("https://dummyjson.com/products?limit=20");
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const data = await res.json();
    popularProducts = data.products;
  } catch (error) {
    console.error("Error fetching popular products:", error);
    return <p className="text-red-500 text-center">Error: Unable to load popular products.</p>;
  }

  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <h1 className="text-3xl font-bold text-center mb-8">Popular Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 py-8 gap-8">
        {popularProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`}>
            <div className="bg-sky-100 rounded-lg shadow-lg p-4 hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg bg-blue-200 flex justify-center items-center">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={200}
                  height={200}
                  className="object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <div className="p-4 bg-gray-100 rounded-b-lg">
              <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="text-gray-500 line-through">${(product.price * 1.2).toFixed(2)}</p>
              <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
              <div className="text-yellow-500">
                <Rating rating={product.rating} />
              </div>
              <p className="text-gray-600">Brand: {product.brand}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <BillBoard />
    </main>
  );
}
