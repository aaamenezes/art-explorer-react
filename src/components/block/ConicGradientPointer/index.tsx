'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export default function ConicGradientPointer() {
  const conicRef = useRef<HTMLDivElement>(null);
  const [{ width, height, top, left }, measure] =
    useElementDimensions(conicRef);

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
        onPointerEnter={() => measure()}
      />
    </div>
  );
}

function useElementDimensions(
  ref: React.RefObject<HTMLDivElement | null>
): [
  { width: number; height: number; top: number; left: number },
  VoidFunction
] {
  const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 });

  function measure() {
    if (!ref.current) return;

    setSize(ref.current.getBoundingClientRect());
  }

  useEffect(() => {
    measure();
  }, []);

  return [size, measure];
}
