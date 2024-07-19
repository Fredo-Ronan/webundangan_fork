import { useState } from "react";
import Image from "next/image";

export default function MasonryGridGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/galery/image1.jpg", // landscape
    "/galery/image2.jpg", // portrait
    "/galery/image3.jpg", // landscape
    "/galery/image4.jpg", // portrait
    "/galery/image8.jpg", // portrait
    "/galery/image5.jpg", // landscape
    "/galery/image6.jpg", // portrait
    "/galery/image7.jpg", // portrait
  ];

  return (
    <div className="h-auto bg-pinkLighter px-5 py-10 lg:hidden md:hidden">
      <div className="h-auto">
        <Image />
      </div>
      <div className="flex justify-center mb-10">
        <p className="text-white text-5xl">Gallery</p>
      </div>
      <video className="h-full w-full rounded-lg mb-10" controls>
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="columns-2 md:columns-2 gap-4">
        {images.map((src, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img
              onClick={() => setSelectedImage(src)}
              className="h-auto w-full rounded-lg object-cover cursor-pointer"
              src={src}
              alt={`gallery-photo-${index}`}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg"
              src={selectedImage}
              alt="Selected"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
