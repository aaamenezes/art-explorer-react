import { useAnimationFrame } from 'motion/react';
import { useRef } from 'react';

export default function AnimatedCube() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(t => {
    if (!cubeRef.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = Math.sin(t / 1000) * 50 + 50;
    cubeRef.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  const cubeSidesMap = [
    { bg: '#ff008844', transform: 'rotateY(0deg)_translateZ(100px)' },
    { bg: '#8ac0ff44', transform: 'rotateY(-90deg)_translateZ(100px)' },
    { bg: '#dd00ee44', transform: 'rotateY(90deg)_translateZ(100px)' },
    { bg: '#0cdcf744', transform: 'rotateX(90deg)_translateZ(100px)' },
    { bg: '#8df0cc44', transform: 'rotateX(-90deg)_translateZ(100px)' },
    { bg: '#9911ff44', transform: 'rotateY(180deg)_translateZ(100px)' },
  ];

  const sideClassName = 'absolute w-full h-full opacity-60';

  return (
    <div
      className="perspective-midrange w-50 h-50 mx-auto my-8"
      aria-hidden="true"
    >
      <div className="w-50 h-50 relative transform-3d" ref={cubeRef}>
        {cubeSidesMap.map(({ bg, transform }, index) => (
          <div
            key={index}
            className={`${sideClassName} bg-[${bg}] [transform:${transform}]`}
          />
        ))}
      </div>
    </div>
  );
}
