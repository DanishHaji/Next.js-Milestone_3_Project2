"use client"; // Client-side component
import { useWishlist } from "@/app/context/wishlistcontext/page"; 
import { useCart } from "@/app/context/cartcontext/page";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"; 
import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: string;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: string[];
  returnPolicy: string;
  minimumOrderQuantity: number;
}

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();
  const { addToCart } = useCart();
  const params = useParams(); 
  const router = useRouter(); 
  const id = params?.id;

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID provided.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${res.statusText}`);
        }
        const data = await res.json();
        setProduct(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError("Unable to load product details. Please check the product ID.");
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="text-center text-gray-500">Product not found.</p>;
  }

  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const handleWishlistClick = () => {
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }

    router.push("/wishlist");
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        thumbnail: product.thumbnail,
      });

      router.push("/cart");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative group">
          <Image
            src={product.thumbnail}
            alt='Product'
            width={600}
            height={600}
            className="object-cover rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>

          {/* Pricing */}
          <div className="flex items-center space-x-4">
            <p className="text-2xl font-semibold text-green-600">
              ${product.price.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-lg text-gray-500 line-through">
                ${(
                  product.price * (1 + product.discountPercentage / 100)
                ).toFixed(2)}
              </p>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 ${
              isInWishlist
                ? "bg-red-100 text-red-500 hover:bg-red-200"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
          >
            <FiHeart className="w-6 h-6" />
          </button>
          {/* Stock Availability */}
          <div className="text-sm text-gray-500">
            <p>
              Availability:{" "}
              <span
                className={product.stock > 0 ? "text-green-500" : "text-red-500"}
              >
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p>Brand: {product.brand}</p>
            <p>SKU: {product.sku}</p>
            <p>Weight: {product.weight}</p>
            <p>Shipping: {product.shippingInformation}</p>
            <p>Return Policy: {product.returnPolicy}</p>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
