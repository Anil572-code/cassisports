import type { Metadata } from "next";
import Link from "next/link";
import FacilityCard, { FacilityCardProps } from "@/components/FacilityCard";

export const metadata: Metadata = {
  title: "Sports Facilities",
  description:
    "Explore Cassi Sports world-class indoor facilities: Futsal 7A, Futsal 5A, Cricsal, Swimming Pool, Table Tennis, Carromboard, and Indoor Safety Zone.",
};

const facilities: FacilityCardProps[] = [
  {
    title: "Futsal 7-a-Side",
    emoji: "⚽",
    description:
      "Our flagship Futsal 7-a-side arena delivers a premier indoor football experience on professional-grade synthetic turf. Designed for competitive matches, leagues, and tournaments.",
    features: [
      "FIFA-quality synthetic grass turf",
      "High-intensity floodlit arena",
      "Changing rooms with lockers",
      "Spectator gallery & seating",
      "Digital scoreboard",
      "Available for league bookings",
    ],
    gradient: "bg-gradient-to-br from-green-500 to-emerald-700",
  },
  {
    title: "Futsal 5-a-Side",
    emoji: "🥅",
    description:
      "Perfect for quick games, casual play, and team training. Our 5-a-side court offers the full futsal experience in a compact, high-quality space.",
    features: [
      "Professional rubberized flooring",
      "Acoustic insulation panels",
      "Electronic scoreboard",
      "Fully air-conditioned",
      "Goals with premium nets",
      "Ideal for corporate events",
    ],
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-700",
  },
  {
    title: "Cricsal (Indoor Cricket)",
    emoji: "🏏",
    description:
      "India-inspired cricsal facility — the best of cricket brought indoors. Enjoy real cricket action year-round regardless of weather with professional nets and equipment.",
    features: [
      "Professional-grade cricket nets",
      "Bowling machine on request",
      "Thick safety padding on walls",
      "One-to-one coaching available",
      "Match simulation sessions",
      "Youth cricket programs",
    ],
    gradient: "bg-gradient-to-br from-amber-500 to-orange-700",
  },
  {
    title: "Swimming Pool",
    emoji: "🏊",
    description:
      "Our temperature-regulated indoor swimming pool is designed for all skill levels. Whether you are a competitive swimmer or a beginner learning strokes, this is your space.",
    features: [
      "Olympic-standard lane markings",
      "Heated water year-round (28–30°C)",
      "Certified lifeguards on duty",
      "Group & personal swimming lessons",
      "Separate toddler pool",
      "Changing rooms & showers",
    ],
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-600",
  },
  {
    title: "Table Tennis",
    emoji: "🏓",
    description:
      "Multiple professional table tennis courts equipped with ITTF-approved tables. From casual fun to competitive training, our table tennis facility caters to all.",
    features: [
      "ITTF-approved Butterfly/Stiga tables",
      "Anti-glare, uniform lighting",
      "Professional coaching sessions",
      "Tournament & league hosting",
      "Equipment rental available",
      "Beginner to advanced programs",
    ],
    gradient: "bg-gradient-to-br from-purple-500 to-violet-700",
  },
  {
    title: "Carromboard",
    emoji: "🎯",
    description:
      "Relax and enjoy this classic indoor game in our dedicated carromboard zone. Perfect for families, groups, and casual players looking to unwind after a game.",
    features: [
      "Premium tournament-grade boards",
      "Tournament-style setup",
      "Family and all-age friendly",
      "Snacks and beverages available",
      "Monthly tournaments",
      "Private booking options",
    ],
    gradient: "bg-gradient-to-br from-rose-400 to-pink-600",
  },
  {
    title: "Indoor Safety Facilities",
    emoji: "🛡️",
    description:
      "Our world-class indoor safety infrastructure ensures every player is protected. Purpose-built to the highest standards for a safe and comfortable sports experience.",
    features: [
      "Climate-controlled environments",
      "Anti-slip, sport-specific flooring",
      "Padded walls and safety nets",
      "First-aid stations on every floor",
      "CCTV surveillance throughout",
      "Trained safety staff on duty",
    ],
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-700",
  },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">
            World-Class Indoor Sports
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="text-brand-orange">Facilities</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Seven premium indoor sports facilities under one roof. Designed for performance,
            built for safety, and crafted for your best game.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Futsal 7A", "Futsal 5A", "Cricsal", "Swimming", "Table Tennis", "Carromboard", "Safety Zone"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </header>

      {/* Facilities Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            Ready to Reserve Your Court or Lane?
          </h2>
          <p className="text-gray-600 mb-8">
            Book any of our facilities in advance. We offer hourly slots, day passes, and
            monthly memberships tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Book a Facility
            </Link>
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
