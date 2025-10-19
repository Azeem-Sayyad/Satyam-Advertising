"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const sections = [
  {
    title: "Hoardings",
    images: ["/images/hoarding1.jpg","/images/hoarding2.jpg","/images/hoarding3.jpg","/images/hoarding4.jpg"]
  },
  {
    title: "LED Installations",
    images: ["/images/led1.jpg","/images/led2.jpg","/images/led3.jpg","/images/led4.jpg"]
  },
  {
    title: "Wraps",
    images: ["/images/wrap1.jpg","/images/wrap2.jpg","/images/wrap3.jpg","/images/wrap4.jpg"]
  }
];

export default function FeaturedPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<number[]>([]);

  // Vertical scroll → horizontal scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  // Track active section for dots
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const sectionWidth = el.clientWidth;
      const idx = Math.round(el.scrollLeft / sectionWidth);
      setActiveIndex(idx);
    };
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index: number) => {
    scrollRef.current?.scrollTo({
      left: index * scrollRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => scrollTo(Math.max(activeIndex - 1, 0));
  const scrollRight = () => scrollTo(Math.min(activeIndex + 1, sections.length - 1));

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));
          if (entry.isIntersecting && !visibleImages.includes(idx)) {
            setVisibleImages((prev) => [...prev, idx]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".fade-slide").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleImages]);

  return (
    <main className="min-h-screen bg-[#f2f2f2] text-gray-900 relative">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-md py-4 px-6 flex justify-between items-center shadow-md">
        <Link href="/" className="text-orange-500 font-semibold hover:underline">
          ← Back
        </Link>
        <h1 className="text-xl font-bold tracking-wide">Featured Work</h1>
      </header>

      {/* Arrow buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-200 hover:bg-orange-300 text-gray-900 p-3 rounded-full z-30 shadow-md"
      >
        ◀
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-200 hover:bg-orange-300 text-gray-900 p-3 rounded-full z-30 shadow-md"
      >
        ▶
      </button>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory h-screen w-full scroll-smooth"
      >
        {sections.map((sec, idx) => (
          <section
            key={idx}
            className="snap-center flex-shrink-0 w-screen flex flex-col justify-center items-center gap-8 px-8 py-16"
          >
            <h2
              className={`text-4xl sm:text-5xl font-extrabold text-orange-500 mb-6 transition-transform duration-800 ${
                activeIndex === idx ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              {sec.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl">
              {sec.images.map((img, i) => (
                <div
                  key={i}
                  data-index={idx * 10 + i} 
                  className={`fade-slide transform transition-all duration-700 ${
                    visibleImages.includes(idx * 10 + i)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <Image
                    src={img}
                    width={400}
                    height={300}
                    alt={`${sec.title} ${i + 1}`}
                    className="rounded-xl object-cover h-56 w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              activeIndex === idx ? "bg-orange-500 w-4 h-4" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </main>
  );
}
