import Link from "next/link";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { FaSmile, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Additional icons

export default function Signup() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg flex w-full max-w-4xl">
        {/* Left Side - Image and Message Centered */}
        <div className="hidden md:flex flex-col justify-center items-center bg-blue-400 rounded-l-lg p-6">
          {/* Image */}
          <Image
            src="/login.jpg"
            alt="Signup Illustration"
            width={300}
            height={300}
            className="rounded-lg mb-4"
          />
          {/* Special Message */}
          <div className="text-white text-sm bg-blue-500 bg-opacity-70 p-4 rounded-md shadow-lg text-center">
            <p className="font-bold text-lg mb-2">🌟 Welcome to Our Family!</p>
            <p>
              Create an account today to access exclusive deals and personalized services. 
              We&apos;re excited to have you on board!
            </p>
          </div>
          {/* Customer Engagement Icons */}
          <div className="flex space-x-4 text-white text-lg mt-6">
            <FaSmile title="We care about you!" className="hover:text-yellow-400 cursor-pointer" />
            <FaPhoneAlt title="Contact us: +1 234 567 890" className="hover:text-green-400 cursor-pointer" />
            <FaEnvelope title="Email us: support@example.com" className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex flex-col w-full md:w-2/3 p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-blue-400">Sign Up</h1>
            <p className="text-gray-600">Join us and start your journey today!</p>
          </div>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition duration-300 mb-4">
            <FcGoogle className="mr-2 text-2xl" /> {/* Google Icon */}
            Sign Up with Google
          </button>

          {/* Divider */}
          <div className="flex items-center mb-6">
            <hr className="flex-grow border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Form */}
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white font-bold py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          {/* Footer Links */}
          <p className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
