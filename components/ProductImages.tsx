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
        <div className="relative w-full aspect-square flex flex-col gap-y-4">
          {images.map((image, index) => (
            <div
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
                alt={image.caption as string}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5">
        <div className="relative aspect-square w-full">
          <Image
            src={mainImage.file?.url as string}
            fill
            alt={mainImage.caption as string}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
