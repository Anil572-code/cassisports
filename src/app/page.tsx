import Link from "next/link";
import FacilityCard, { FacilityCardProps } from "@/components/FacilityCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatStrip from "@/components/StatStrip";

const stats = [
  { value: "7", label: "Sports Facilities", icon: "🏟️" },
  { value: "500+", label: "Members", icon: "👥" },
  { value: "10+", label: "Years Experience", icon: "🏆" },
  { value: "5★", label: "Star Experience", icon: "⭐" },
];

const facilities: FacilityCardProps[] = [
  {
    title: "Futsal 7-a-Side",
    emoji: "⚽",
    description:
      "Full-size indoor futsal arena for 7-a-side matches. Professional-grade turf and flood lighting for the ultimate futsal experience.",
    features: [
      "Synthetic grass turf",
      "Floodlit arena",
      "Changing rooms & lockers",
      "Spectator seating",
    ],
    gradient: "bg-gradient-to-br from-green-500 to-emerald-700",
  },
  {
    title: "Futsal 5-a-Side",
    emoji: "🥅",
    description:
      "Compact 5-a-side indoor court perfect for quick matches, practice sessions, and tournaments.",
    features: [
      "Rubberized flooring",
      "Acoustic insulation",
      "Scoreboard display",
      "Air-conditioned",
    ],
    gradient: "bg-gradient-to-br from-blue-500 to-indigo-700",
  },
  {
    title: "Cricsal (Indoor Cricket)",
    emoji: "🏏",
    description:
      "State-of-the-art indoor cricket facility with professional nets and real cricket experience indoors.",
    features: [
      "Professional cricket nets",
      "Bowling machine available",
      "Safety padding",
      "Coaching available",
    ],
    gradient: "bg-gradient-to-br from-amber-500 to-orange-700",
  },
  {
    title: "Swimming Pool",
    emoji: "🏊",
    description:
      "Temperature-controlled indoor swimming pool suitable for all skill levels, from beginners to competitive swimmers.",
    features: [
      "Olympic-standard lanes",
      "Heated water year-round",
      "Certified lifeguards",
      "Swimming classes",
    ],
    gradient: "bg-gradient-to-br from-cyan-400 to-blue-600",
  },
  {
    title: "Table Tennis",
    emoji: "🏓",
    description:
      "Professional table tennis courts for recreational play and competitive training with top-quality equipment.",
    features: [
      "ITTF-approved tables",
      "Anti-glare lighting",
      "Coaching sessions",
      "Tournament hosting",
    ],
    gradient: "bg-gradient-to-br from-purple-500 to-violet-700",
  },
  {
    title: "Carromboard",
    emoji: "🎯",
    description:
      "Dedicated carromboard arena with premium boards and a relaxed atmosphere perfect for family and friends.",
    features: [
      "Premium quality boards",
      "Tournament-style setup",
      "Family-friendly",
      "Snacks available",
    ],
    gradient: "bg-gradient-to-br from-rose-400 to-pink-600",
  },
];

const whyChooseUs = [
  {
    icon: "🛡️",
    title: "Indoor Safety First",
    desc: "Weather-proof, climate-controlled facilities ensuring you can play all year round without interruption.",
  },
  {
    icon: "🌟",
    title: "Premium Quality",
    desc: "Professional-grade equipment and world-class infrastructure to elevate your performance.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "For Everyone",
    desc: "Suitable for kids, adults, casual players and professional athletes alike.",
  },
  {
    icon: "🍹",
    title: "Lounge & Dining",
    desc: "Unwind after your game at our premium Cassi Lounge — the perfect sports hangout.",
  },
];

const galleryGradients = [
  "from-orange-400 to-red-600",
  "from-teal-400 to-cyan-600",
  "from-green-400 to-emerald-600",
  "from-purple-400 to-violet-600",
  "from-amber-400 to-orange-600",
  "from-blue-400 to-indigo-600",
];

const galleryLabels = [
  "Futsal Arena",
  "Swimming Pool",
  "Cricsal Courts",
  "Table Tennis",
  "Cassi Lounge",
  "Sports Bar",
];

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Professional Futsal Player",
    text: "The Futsal 7A at Cassi Sports is hands down the best indoor facility I have played at. The turf quality, lighting, and overall ambiance is absolutely top-notch. I bring my entire team here every weekend!",
    rating: 5,
    initials: "RM",
    color: "bg-brand-orange",
  },
  {
    name: "Priya Sharma",
    role: "Competitive Swimmer",
    text: "The swimming pool is immaculate and the water temperature is always perfect. The staff is professional and the locker rooms are excellent. I have been a member for 3 years and it keeps getting better!",
    rating: 5,
    initials: "PS",
    color: "bg-brand-teal",
  },
  {
    name: "Arjun & Family",
    role: "Weekend Sports Family",
    text: "We love spending our weekends at Cassi Sports. The kids play carrom and table tennis while the adults enjoy the lounge. It is a one-stop destination for the whole family. Highly recommended!",
    rating: 5,
    initials: "AF",
    color: "bg-purple-500",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-brand-orange text-sm font-semibold tracking-wide uppercase">
              Now Open &mdash; All Facilities
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            Where Champions{" "}
            <span className="text-brand-orange">Train</span>
            <br />
            &amp; Champions{" "}
            <span className="text-brand-teal">Relax</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            <strong className="text-white">Cassi Sports &amp; Recreational Center Pvt. Ltd.</strong>{" "}
            &mdash; your premier destination for world-class indoor sports facilities and a luxurious
            sports lounge, all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/facilities" className="btn-primary text-base px-8 py-4">
              🏟️ Explore Facilities
            </Link>
            <Link href="/lounge" className="btn-outline-teal text-base px-8 py-4">
              🍹 Visit Lounge &amp; Bar
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-1 text-gray-500">
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatStrip stats={stats} />

      {/* Facilities Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Our Facilities
            </span>
            <h2 className="section-heading">World-Class Sports Under One Roof</h2>
            <p className="section-subheading mx-auto">
              From competitive futsal arenas to serene swimming pools &mdash; every facility is
              designed to bring out the champion in you.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility) => (
              <FacilityCard key={facility.title} {...facility} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/facilities" className="btn-primary">
              View All Facilities &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Indoor Safety Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
                Safety &amp; Comfort
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Indoor Safety Facilities &mdash; Play All Year Round
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our indoor facilities are engineered for maximum safety and performance.
                With climate-controlled environments, anti-slip surfaces, padded walls,
                and certified safety equipment, every game is protected against weather
                and accidents.
              </p>
              <ul className="space-y-4">
                {[
                  "Climate-controlled, air-conditioned arenas",
                  "Anti-slip, sport-specific flooring",
                  "Padded walls and safety nets",
                  "First-aid stations on every floor",
                  "CCTV surveillance and secure access",
                  "Trained safety staff on duty",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-orange/15 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-brand-teal/20 to-brand-orange/20 rounded-3xl flex items-center justify-center border border-gray-100 shadow-xl">
                <div className="text-center">
                  <span className="text-8xl">🛡️</span>
                  <p className="text-gray-500 mt-4 font-medium">Safety-First Design</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-brand-orange rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <p className="text-white font-black text-xl">100%</p>
                  <p className="text-orange-100 text-xs font-medium">Safe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cassi Lounge Teaser */}
      <section className="py-24 bg-gradient-to-br from-brand-dark via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                Cassi Lounge &amp; Sports Bar
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                Where the Game Continues<br />
                <span className="text-amber-400">Off the Field</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Step into the Cassi Lounge &mdash; a premium sports bar and dining experience
                designed for champions. Watch live sports on giant screens, enjoy craft
                drinks and gourmet bites, and relish every victory in style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/lounge" className="btn-primary">
                  Explore the Lounge &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-lg transition-all duration-300 hover:bg-amber-400 hover:text-slate-900"
                >
                  Reserve a Table
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🍔", label: "Gourmet Food" },
                { icon: "🍺", label: "Craft Drinks" },
                { icon: "📺", label: "Live Sports" },
                { icon: "🎮", label: "Gaming Zone" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-2xl p-6 flex flex-col items-center gap-3 hover:bg-white/20 transition-colors duration-200"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <span className="text-white font-semibold text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Why Cassi Sports
            </span>
            <h2 className="section-heading">The Premier Choice for Indoor Sports</h2>
            <p className="section-subheading mx-auto">
              Thousands of athletes, families, and sports enthusiasts choose Cassi Sports
              every year. Here&apos;s why.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-orange/5 border border-gray-100 hover:border-brand-orange/20 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Gallery
            </span>
            <h2 className="section-heading">A Glimpse Inside Cassi Sports</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryGradients.map((grad, i) => (
              <div
                key={i}
                className={`relative h-48 md:h-64 bg-gradient-to-br ${grad} rounded-2xl overflow-hidden cursor-pointer group`}
              >
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-semibold text-sm bg-black/30 rounded-lg px-3 py-1 backdrop-blur-sm">
                    {galleryLabels[i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Testimonials
            </span>
            <h2 className="section-heading">What Our Members Say</h2>
            <p className="section-subheading mx-auto">
              Hear from athletes, families, and sports enthusiasts who call Cassi Sports their home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Play? Book Your Session Today!
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Join 500+ members who trust Cassi Sports for their sports and recreation needs.
            Slots fill fast &mdash; reserve yours now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-orange font-bold rounded-lg text-base transition-all duration-300 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-0.5"
            >
              Book Now
            </Link>
            <a
              href="https://wa.me/919999999999"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-base transition-all duration-300 hover:bg-white/10"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
