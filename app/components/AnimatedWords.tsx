import { useEffect, useState } from "react";

interface AnimatedWordsProps {
  text: string;
}

export default function AnimatedWords({ text }: AnimatedWordsProps) {
  const words = text.split(" ");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < words.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 300); // adjust delay between words
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap gap-2">
      {words.map((word, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-500 ease-out ${
            index < visibleCount ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
