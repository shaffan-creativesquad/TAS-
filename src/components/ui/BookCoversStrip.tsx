"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const COVERS = [
  { src: "/midnight-verdict.jpeg",   alt: "The Midnight Verdict" },
  { src: "/Whispers of Eden.jpeg",   alt: "Whispers of Eden" },
  { src: "/Beyond the Horizon.jpeg", alt: "Beyond the Horizon" },
  { src: "/The Last Oracle.jpeg",    alt: "The Last Oracle" },
  { src: "/Silicon Dreams.jpeg",     alt: "Silicon Dreams" },
  { src: "/Roots-of-gold.jpeg",      alt: "Roots of Gold" },
];

const ROTATIONS = [-5, -2, 1, -3, 4, -1];

type Props = { count?: number; width?: number };

export default function BookCoversStrip({ count = 6, width = 70 }: Props) {
  return (
    <div className="flex items-end justify-center gap-2 sm:gap-3">
      {COVERS.slice(0, count).map((b, i) => (
        <motion.div
          key={b.src}
          className="relative rounded-[3px_10px_10px_3px] overflow-hidden shadow-xl flex-shrink-0"
          style={{ width, aspectRatio: "2/3", rotate: `${ROTATIONS[i]}deg` }}
          whileHover={{ scale: 1.12, rotate: 0, zIndex: 20, y: -10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Image
            src={b.src}
            alt={b.alt}
            fill
            className="object-cover"
            sizes={`${width}px`}
          />
        </motion.div>
      ))}
    </div>
  );
}
