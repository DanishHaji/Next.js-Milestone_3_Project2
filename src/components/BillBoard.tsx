import React from 'react';
import Image from 'next/image';

const BillBoard = () => {
  return (
    <div className="flex justify-center space-x-4 p-8">
    <div className="w-1/3 relative rounded-3xl overflow-hidden group">
      <Image
        src="/1.jpg"
        alt="Image 1"
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="w-1/3 relative rounded-3xl overflow-hidden group">
      <Image
        src="/2.jpg"
        alt="Image 2"
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="w-1/3 relative rounded-3xl overflow-hidden group">
      <Image
        src="/3.jpg"
        alt="Image 3"
        width={400}
        height={300}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
  </div>
  )
}

export default BillBoard
