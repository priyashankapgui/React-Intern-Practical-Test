import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Spinner = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();
    const obj = { length: 0, pathLength };
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;

    const tween = gsap.to(obj, {
      length: pathLength,
      duration: 4, 
      repeat: -1,
      yoyo: true,
      ease: 'linear',
      onUpdate: () => {
        if (path) {
          path.style.strokeDasharray = `${obj.length} ${obj.pathLength}`;
        }
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-none">
      <svg
        width="600"
        height="600"
        viewBox="0 0 792 612"
        className="mt-4"
      >
        <g>
          <path
            ref={pathRef}
            className="stroke-purple-400 stroke-[3] fill-none"
            d="M17.902,114.475h26.949c2.296,0,12.876-10.182,20.063-10.182
            c7.186,0,10.83,10.182,12.576,10.182h18.266l7.187,10.779l7.485-100.91l5.091,114.984l6.887-24.554h24.41
            c3.239,0,14.816-16.769,20.206-16.769s11.08,16.47,13.475,16.47c2.845,0,26.665,0,26.665,0l27.757,0
            c2.296,0,12.875-10.181,20.062-10.181c7.186,0,10.831,10.181,12.577,10.181h18.266l7.187,10.779l7.485-100.91l5.091,114.984
            l6.888-24.555h24.41c3.24,0,14.817-16.768,20.207-16.768s11.079,16.469,13.474,16.469c2.845,0,26.666,0,26.666,0h27.813
            c2.297,0,12.877-10.181,20.063-10.181s10.829,10.181,12.576,10.181h18.265l7.188,10.779l7.485-100.91l5.091,114.984
            l6.887-24.555h24.409c3.238,0,14.816-16.768,20.206-16.768s11.08,16.469,13.476,16.469c2.846,0,26.664,0,26.664,0"
          />
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
