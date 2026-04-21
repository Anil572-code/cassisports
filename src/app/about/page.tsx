import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cassi Sports & Recreational Center Pvt. Ltd. — our mission, values, and commitment to delivering world-class indoor sports experiences.",
};

const values = [
  {
    icon: "🏆",
    title: "Excellence",
    desc: "We hold ourselves to the highest standards in every facility, service, and interaction — because you deserve nothing less than the best.",
  },
  {
    icon: "🤝",
    title: "Community",
    desc: "We believe sport connects people. Cassi Sports is a place where friendships are forged, rivalries are celebrated, and community is built.",
  },
  {
    icon: "🛡️",
    title: "Safety",
    desc: "The wellbeing of every player, family member, and visitor is our top priority. Our indoor facilities are engineered with safety first.",
  },
  {
    icon: "🌱",
    title: "Growth",
    desc: "We are committed to growing talent at every level — from juniors discovering sport to professionals honing their craft.",
  },
];

const milestones = [
  { year: "2013", event: "Founded with a vision to create premium indoor sports in India" },
  { year: "2015", event: "Opened our flagship Futsal 7A and 5A arenas" },
  { year: "2017", event: "Added the Cricsal indoor cricket facility" },
  { year: "2019", event: "Launched the Olympic-standard indoor swimming pool" },
  { year: "2021", event: "Introduced Table Tennis and Carromboard zones" },
  { year: "2023", event: "Opened Cassi Lounge & Sports Bar" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-brand-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            About <span className="text-brand-orange">Cassi Sports</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            More than a sports center &mdash; we are a movement. A place where champions are made,
            communities unite, and every game matters.
          </p>
        </div>
      </header>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                Cassi Sports &amp; Recreational Center Pvt. Ltd.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded over a decade ago, Cassi Sports &amp; Recreational Center is a 
                premier indoor sports destination dedicated to transforming the way people 
                experience recreational sports. We believe every person &mdash; regardless of 
                skill level &mdash; deserves access to world-class sports infrastructure.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                From our state-of-the-art futsal arenas to our luxurious Cassi Lounge, 
                every aspect of our center is designed with one goal: to give you the 
                ultimate sports and recreational experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We are proud to be home to over 500 active members, dozens of corporate 
                partners, and a vibrant community of sports lovers who call Cassi Sports 
                their second home.
              </p>
            </div>
            <div className="relative">
              <div className="h-96 bg-gradient-to-br from-brand-orange/20 to-brand-teal/20 rounded-3xl flex items-center justify-center shadow-xl border border-gray-100">
                <div className="text-center p-6">
                  <div className="text-7xl mb-4">🏟️</div>
                  <p className="text-gray-700 font-bold text-xl">10+ Years of Excellence</p>
                  <p className="text-gray-500 mt-2">Serving champions since 2013</p>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 bg-brand-orange rounded-2xl p-4 shadow-lg">
                <p className="text-white font-black text-3xl">500+</p>
                <p className="text-orange-100 text-xs font-medium">Active Members</p>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-brand-teal rounded-2xl p-4 shadow-lg">
                <p className="text-white font-black text-3xl">7</p>
                <p className="text-teal-100 text-xs font-medium">Facilities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              Empowering Every Athlete, Every Day
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange rounded-l-3xl" />
              <blockquote className="text-2xl md:text-3xl font-bold text-gray-800 italic leading-relaxed">
                &ldquo;To provide every individual with access to world-class indoor sports 
                infrastructure that inspires performance, fosters community, and 
                makes sport a way of life.&rdquo;
              </blockquote>
              <p className="text-brand-orange font-semibold mt-6">&mdash; Cassi Sports &amp; Recreational Center Pvt. Ltd.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The Principles That Drive Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our core values guide everything we do &mdash; from how we build our facilities
              to how we serve our members.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-brand-orange/5 hover:border-brand-orange/20 border border-gray-100 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-brand-orange transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Indoor Recreation Focus */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-brand-teal font-semibold text-sm uppercase tracking-widest mb-3">
                Indoor Recreation Focus
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Why Indoor Sports Are the Future
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                At Cassi Sports, we pioneered the indoor recreational sports concept, 
                recognizing that climate-controlled, professionally managed environments 
                represent the next evolution of sports infrastructure.
              </p>
              <ul className="space-y-4">
                {[
                  "Play regardless of weather or time of day",
                  "Superior safety standards and controlled environments",
                  "Professional-grade equipment maintained year-round",
                  "Community-focused programming for all age groups",
                  "Integrated lounge and dining for a complete experience",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-brand-orange font-bold text-sm">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-brand-orange" />
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 h-8 bg-brand-orange/30 mt-1" />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="text-gray-300 text-sm">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Visual */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              The People Behind Cassi Sports
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A dedicated team of sports professionals, hospitality experts, and facility 
              managers committed to delivering your best experience every day.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { role: "Management", icon: "👔", color: "from-brand-orange to-orange-700" },
              { role: "Coaches", icon: "🏋️", color: "from-brand-teal to-cyan-700" },
              { role: "Safety Staff", icon: "🛡️", color: "from-green-500 to-emerald-700" },
              { role: "Lounge Team", icon: "🍴", color: "from-amber-500 to-orange-600" },
            ].map((team) => (
              <div
                key={team.role}
                className={`h-40 bg-gradient-to-br ${team.color} rounded-2xl flex flex-col items-center justify-center gap-3 shadow-md hover:shadow-xl transition-shadow duration-300`}
              >
                <span className="text-4xl">{team.icon}</span>
                <span className="text-white font-bold text-sm">{team.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-orange to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Come and Experience Cassi Sports
          </h2>
          <p className="text-orange-100 mb-8">
            Visit us, tour our facilities, and discover why we are the leading indoor
            sports destination. We would love to welcome you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-orange font-bold rounded-lg transition-all duration-300 hover:bg-orange-50 w-full sm:w-auto"
            >
              Contact Us
            </Link>
            <Link
              href="/facilities"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
