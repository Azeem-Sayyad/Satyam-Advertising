"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  return (
    <main className="min-h-screen bg-[#fefefe] flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <div
        className={`text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#f07e04] mb-4">
          Get in Touch
        </h1>
        <p className="text-slate-700 text-base md:text-lg max-w-2xl mx-auto mb-10">
          We’d love to hear from you. Whether it’s a campaign inquiry, a
          partnership idea, or just a quick chat — drop us a message below.
        </p>
      </div>

      {/* Form Container */}
      <div
        className={`w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-slate-200 p-6 md:p-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeVYwsovLU_l56omfnzeMXy-AlRohZN6jGgeU_osYPVXYjYwQ/viewform?embedded=true"
          width="100%"
          height="950"
          className="rounded-lg"
        >
          Loading…
        </iframe>
      </div>

      {/* Back to Home Button */}
      <div
        className={`mt-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <Link
          href="/"
          className="inline-block bg-[#f07e04] text-white px-6 py-3 rounded-md font-semibold
                     shadow-md border-2 border-[#f07e04] 
                     transition-all duration-300 ease-in-out 
                     hover:bg-transparent hover:text-[#f07e04]"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
