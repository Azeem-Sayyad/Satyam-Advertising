"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedWords from "./components/AnimatedWords";
import FadeDown from "./components/FadeDown";
import CountUp from "./components/CountUp";
// Types
type Service = {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
};
type Project = { id: string; title: string; location: string; img: string };
type Testimonial = {
  id: string;
  quote: string;
  name: string;
  company?: string;
};

// Data
const SERVICES: Service[] = [
  {
    id: "hoardings",
    title: "Hoardings & Billboards",
    desc: "Strategic outdoor placements across high-traffic zones.",
    icon: (
      <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="6"
          width="14"
          height="8"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M7 14v5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "printing",
    title: "Flex Printing & Design",
    desc: "High-quality prints with fast turnaround — custom artwork or design support.",
    icon: (
      <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 7h16v10H4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 3v4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "led",
    title: "LED Boards & Signage",
    desc: "Eye-catching digital solutions for day & night visibility.",
    icon: (
      <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M12 8v8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "installation",
    title: "Installation & Maintenance",
    desc: "Licensed crews for safe installation and upkeep.",
    icon: (
      <svg className="w-8 h-8 text-[#FF6B35]" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 7h18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 7v10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "City Center Billboard",
    location: "MG Road",
    img: "/images/hoarding-1.jpg",
  },
  {
    id: "p2",
    title: "Mall Entrance Wrap",
    location: "Central Mall",
    img: "/images/hoarding-2.jpg",
  },
  {
    id: "p3",
    title: "LED Roadside",
    location: "Ring Road",
    img: "/images/hoarding-3.jpg",
  },
  {
    id: "p4",
    title: "Transit Shelter",
    location: "Bus Stand",
    img: "/images/hoarding-4.jpg",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote: "Great locations and timely service. Our footfall doubled!",
    name: "Asha Patel",
    company: "Cafe Aroma",
  },
  {
    id: "t2",
    quote: "Professional team and excellent print quality.",
    name: "Ravi Kumar",
    company: "Kumar Textiles",
  },
];

// Stats Section
function StatsSection() {
  const stats = [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 200, suffix: "+", label: "Campaigns Done" },
    { value: 50, suffix: "+", label: "City Locations" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
      {stats.map((stat, idx) => (
        <FadeDown key={idx} index={idx} delay={idx * 150}>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-slate-900">
              <CountUp target={stat.value} />
              {stat.suffix}
            </div>
            <div className="text-slate-600 mt-1">{stat.label}</div>
          </div>
        </FadeDown>
      ))}
    </div>
  );
}



// Main Page
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/favicon.ico" alt="logo" width={50} height={50} />
            <span className="font-semibold">Satyam Advertising</span>
          </Link>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <Link href="#services" className="hover:underline">
              Services
            </Link>
            <Link href="#portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link href="#testimonials" className="hover:underline">
              Testimonials
            </Link>
            <Link
              href="/contact"
              className="bg-[#f07e04] text-slate-900 px-4 py-2 rounded-md font-bold transition-all duration-500 ease-in-out transform hover:bg-[#ff8c42] hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 py-16">
          <div>
            <p className="text-sm font-medium text-amber-500">
              Outdoor Advertising • Hoardings • LED • Printing
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              <AnimatedWords text="We make your brand impossible to miss" />
            </h1>
            <p className="mt-6 text-slate-700 max-w-xl">
              Premium outdoor placements, full-service design & installation,
              and targeted local campaigns that get you noticed — fast.
            </p>

            <StatsSection />

            <div className="mt-8 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#f07e04] px-5 py-3 rounded-md font-semibold shadow transition-all duration-500 ease-in-out transform hover:bg-[#ff8c42] hover:scale-105 hover:shadow-lg"
              >
                Get in Touch!
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-500 transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                View Work
              </a>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/hero-hoarding.jpg"
                width={1200}
                height={800}
                alt="Hoarding in a busy city"
                className="object-cover w-full h-80 sm:h-96 md:h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-2">Our Services</h2>
        <p className="text-slate-600 mb-6 max-w-2xl">
          End-to-end outdoor advertising services — from site survey and
          creative to installation and maintenance.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <FadeDown key={s.id} index={idx} delay={150}>
              <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-md bg-amber-50 text-amber-500">
                    {s.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              </article>
            </FadeDown>
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <p className="text-slate-600">
              A selection of recent hoardings, wraps and LED installations.
            </p>
          </div>
          <Link href="/featured" className="text-sm underline">
            View all
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.map((p, idx) => (
            <>
              <FadeDown key={p.id} index={idx} delay={150}>
                <figure className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                  <div className="relative w-full h-48">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4">
                    <div className="font-semibold">{p.title}</div>
                    <div className="text-sm text-slate-600">{p.location}</div>
                  </figcaption>
                </figure>
              </FadeDown>
            </>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-4">What clients say</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <FadeDown key={t.id} index={idx} delay={200}>
              <blockquote className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1">
                <p className="text-slate-700">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-slate-600">
                  — {t.name}
                  {t.company ? `, ${t.company}` : ""}
                </footer>
              </blockquote>
            </FadeDown>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">
              Ready to launch your campaign?
            </h3>
            <p className="mt-2 text-slate-700">
              Tell us your goals and we'll propose prime locations and creative
              options.
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f07e04] px-4 py-3 rounded-md font-semibold transition-all duration-500 hover:bg-[#ff8c42] hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919373734774"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-slate-800 transition-all duration-300 hover:bg-transparent hover:text-black hover:border-black"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-3">
            <img src="/favicon.ico" alt="logo" width={70} height={70} />
            <div>
              <div className="font-semibold">Satyam Advertising</div>
              <div className="text-sm text-slate-600">
                Making brands visible since 2015
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Quick Links</div>
            <ul className="space-y-1">
              <li>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm text-slate-700">
            <div className="font-medium mb-2">Contact</div>
            <div>+91 9373734774</div>
            <div className="mt-1">satyamadvt555@gmail.com</div>
            <div className="mt-2 text-slate-500 text-xs">
              Registered office • City Name
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Satyam Advertising. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
