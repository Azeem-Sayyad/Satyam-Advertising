import React from "react";
import Image from "next/image";
import Link from "next/link";

// Place this file at: /app/page.tsx (Next.js App Router)
// Tailwind CSS must be configured in your project. Images used here are placeholders —
// put your images in /public/images and update the src paths below.

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

const SERVICES: Service[] = [
  {
    id: "hoardings",
    title: "Hoardings & Billboards",
    desc: "Strategic outdoor placements across high-traffic zones.",
    icon: (
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
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
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
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
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
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
      <svg
        className="w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
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

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-slate-900">
      <header className="bg-white shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/favicon.ico" alt="logo" height={"50px"} width={"50px"} />
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
              className="bg-orange-600 text-slate-900 px-4 py-2 rounded-md text-sm font-medium"
            >
              Get Quote
            </Link>
          </nav>
          <div className="md:hidden">
            <Link
              href="/contact"
              className="bg-orange-600 text-slate-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Quote
            </Link>
          </div>
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
              We make your brand impossible to miss
            </h1>
            <p className="mt-6 text-slate-700 max-w-xl">
              Premium outdoor placements, full-service design & installation,
              and targeted local campaigns that get you noticed — fast.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-600 px-5 py-3 rounded-md font-semibold shadow"
              >
                Get a Free Quote
              </Link>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-slate-200"
              >
                View Work
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-xs">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-slate-600">Years Experience</div>
              </div>
              <div className="text-xs">
                <div className="text-2xl font-bold">200+</div>
                <div className="text-slate-600">Campaigns Done</div>
              </div>
              <div className="text-xs">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-slate-600">City Locations</div>
              </div>
              <div className="text-xs">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-slate-600">Support</div>
              </div>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            {/* Hero image: replace path with a real image in /public/images */}
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
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          End-to-end outdoor advertising services — from site survey and
          creative to installation and maintenance.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
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
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Featured Projects</h2>
            <p className="mt-2 text-slate-600">
              A selection of recent hoardings, wraps and LED installations.
            </p>
          </div>
          <Link href="/portfolio" className="text-sm underline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROJECTS.map((p) => (
            <figure
              key={p.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
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
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">What clients say</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-600">
                — {t.name}
                {t.company ? `, ${t.company}` : ""}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-orange-600/10 py-12">
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
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 px-4 py-3 rounded-md font-semibold"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+911234567890"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-slate-200"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-orange-600 flex items-center justify-center font-bold text-slate-900">
                AD
              </div>
              <div>
                <div className="font-semibold">LocalAds Co.</div>
                <div className="text-sm text-slate-600">
                  Making brands visible since 2015
                </div>
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
            <div>+91 12345 67890</div>
            <div className="mt-1">hello@localads.example</div>
            <div className="mt-2 text-slate-500 text-xs">
              Registered office • City Name
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} LocalAds Co. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
