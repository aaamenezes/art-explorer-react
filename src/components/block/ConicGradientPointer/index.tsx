'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function ConicGradientPointer() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const conicRef = useRef<HTMLDivElement>(null);

  const top = 0;
  const left = 0;

  const gradientX = useMotionValue(0.5);
  const gradientY = useMotionValue(0.5);

  const background = useTransform(
    () =>
      `conic-gradient(from 0deg at calc(${
        gradientX.get() * 100
      }% - ${left}px) calc(${
        gradientY.get() * 100
      }% - ${top}px), #0cdcf7, #ff0088, #fff312, #0cdcf7)`
  );

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  return (
    <div
      className="fixed -z-[1] inset-0 flex items-center justify-center"
      onPointerMove={e => {
        gradientX.set(e.clientX / width);
        gradientY.set(e.clientY / height);
      }}
    >
      <motion.div
        ref={conicRef}
        className={`w-full h-full opacity-20 cursor-none`}
        style={{ background }}
      />
    </div>
  );
}
