"use client";

import { useEffect, useState, ReactNode } from "react";

interface FadeDownProps {
  children: ReactNode;
  index?: number;
  delay?: number; // ms between each stagger
}

export default function FadeDown({ children, index = 0, delay = 100 }: FadeDownProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), index * delay);
    return () => clearTimeout(timer);
  }, [index, delay]);

  return (
    <div
      className={`transition-all duration-500 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}
