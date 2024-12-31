import Image from 'next/image';
import Link from 'next/link';

const FeaturedCategories: React.FC = () => {
  const categories = [
    { name: "Fashion", imgSrc: "/navigations/1.png", link: "/fashion", bgColor: "bg-blue-100" },
    { name: "Electronics", imgSrc: "/navigations/2.png", link: "/electronics", bgColor: "bg-yellow-100" },
    { name: "Bags", imgSrc: "/navigations/3.png", link: "/bags", bgColor: "bg-green-100" },
    { name: "Footwear", imgSrc: "/navigations/4.png", link: "/footwear", bgColor: "bg-red-100" },
    { name: "Groceries", imgSrc: "/navigations/5.png", link: "/groceries", bgColor: "bg-purple-100" },
    { name: "Beauty", imgSrc: "/navigations/6.png", link: "/beauty", bgColor: "bg-pink-100" },
    { name: "Wellness", imgSrc: "/navigations/7.png", link: "/wellness", bgColor: "bg-teal-100" },
    { name: "Jewelry", imgSrc: "/navigations/8.png", link: "/jewelry", bgColor: "bg-indigo-100" },
  ];

  return (
    <div className="py-8 px-6">
      <h2 className="text-left text-lg lg:text-xl font-semibold text-gray-500 mb-6">Featured Categories</h2>
      <div className="flex overflow-x-auto space-x-4 pb-4 lg:flex-wrap lg:justify-between lg:overflow-x-visible">
        {categories.map((category, index) => (
          <Link href={category.link} key={index} legacyBehavior>
            <a className="flex flex-col items-center group">
              {/* Image container with different background color */}
              <div
                className={`w-20 h-20 lg:w-28 lg:h-28 rounded-full overflow-hidden ${category.bgColor} border border-gray-300 shadow-lg flex justify-center items-center transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl`}
              >
                <Image
                  src={category.imgSrc}
                  alt={category.name}
                  width={140}
                  height={140}
                  layout="intrinsic"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-sm lg:text-base font-medium text-center mt-2 group-hover:text-red-500 transition-colors duration-300">
                {category.name}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCategories;
