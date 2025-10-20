"use client";
import { useEffect, useState } from "react";

type CountUpProps = {
  target: number;
  duration?: number;
  className?: string;
};

export default function CountUp({ target, duration = 2000, className }: CountUpProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // 16ms ~ 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span className={className}>{count}</span>;
}
