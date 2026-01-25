"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface PolaroidProps {
  image: StaticImageData;
  caption: string;
  rotation?: number;
  delay?: number;
}

export default function Polaroid({
  image,
  caption,
  rotation = 0,
  delay = 0,
}: PolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
      className="relative cursor-pointer"
      style={{ rotate: `${rotation}deg` }}
    >
      <div className="bg-white p-2 pb-8 shadow-lg hover:shadow-2xl transition-shadow">
        <div className="relative w-48 h-48 bg-gray-100">
          <Image
            src={image}
            alt={caption}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-center mt-2 text-gray-700 italic text-xs">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}
