"use client";

import Image from "next/image";
import { useState } from "react";
import { Image as iImage } from "swell-js";

const ProductImages = ({ images }: { images: iImage[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  function selectMainImage(image: iImage) {
    setMainImage(image);
  }

  return (
    <div className="grid grid-cols-6 gap-x-2">
      <div className="col-span-1">
        <div className="relative w-full flex flex-col gap-y-2">
          {images.map((image, index) => (
            <div
              className="relative aspect-square object-contain"
              key={index}
              onClick={() => {
                selectMainImage(image);
              }}
            >
              <Image
                className={`cursor-pointer ${
                  image.id === mainImage.id ? "border border-black" : null
                }`}
                src={image.file?.url as string}
                fill
                alt="Product image"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5">
        <div className="relative aspect-square w-full object-contain">
          <Image
            className="tranisition-all duration-500 ease-in-out"
            src={mainImage.file?.url as string}
            fill
            alt="Product image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
