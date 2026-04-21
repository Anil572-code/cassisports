import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lounge & Sports Bar",
  description:
    "Experience the Cassi Lounge & Sports Bar — a premium sports viewing destination with gourmet food, craft drinks, live sports, and luxurious ambiance.",
};

const menuItems = [
  {
    category: "Signature Bites",
    icon: "🍔",
    items: [
      { name: "Champion Burger", desc: "Double patty, jalapeños, special cassi sauce", price: "₹349" },
      { name: "Loaded Nachos", desc: "Cheese, salsa, sour cream, guacamole", price: "₹249" },
      { name: "Crispy Chicken Wings", desc: "Buffalo or honey-garlic, 6 pcs", price: "₹299" },
      { name: "Gourmet Pizza", desc: "Stone-baked, 8 inch, choice of toppings", price: "₹399" },
    ],
  },
  {
    category: "Craft Drinks",
    icon: "🍺",
    items: [
      { name: "Sports Mojito", desc: "Fresh mint, lime, soda, your choice of flavor", price: "₹199" },
      { name: "Victory Shake", desc: "Protein-rich post-game shake", price: "₹179" },
      { name: "Craft Beer", desc: "Rotating selection of premium drafts", price: "₹249" },
      { name: "Cassi Cooler", desc: "Signature tropical non-alcoholic blend", price: "₹149" },
    ],
  },
  {
    category: "Snacks & Sharers",
    icon: "🥨",
    items: [
      { name: "Masala Fries", desc: "Crispy, spiced, with dip", price: "₹149" },
      { name: "Paneer Tikka Skewers", desc: "Marinated, grilled, mint chutney", price: "₹229" },
      { name: "Mezze Platter", desc: "Hummus, pita, olives, falafel", price: "₹349" },
      { name: "Popcorn Chicken", desc: "Crispy bites with BBQ dip", price: "₹199" },
    ],
  },
];

const loungeFeatures = [
  { icon: "📺", title: "Giant Screens", desc: "12 ultra-HD screens showing live sports from around the world — never miss a match." },
  { icon: "🎵", title: "Premium Sound", desc: "Dolby-powered surround sound system for an immersive sports atmosphere." },
  { icon: "🛋️", title: "Luxury Seating", desc: "Premium leather seating, private booths, and cozy lounge corners." },
  { icon: "🎮", title: "Gaming Corner", desc: "Retro arcade games and modern consoles for the gamer in you." },
  { icon: "🍷", title: "Full Bar", desc: "Extensive drinks menu featuring craft beers, cocktails, mocktails, and spirits." },
  { icon: "🏆", title: "Trophy Room", desc: "Inspiring sports memorabilia and an exclusive VIP zone for members." },
];

const galleryGradients = [
  { gradient: "from-amber-600 to-orange-800", label: "Main Bar" },
  { gradient: "from-slate-700 to-slate-900", label: "Sports Screens" },
  { gradient: "from-rose-600 to-red-800", label: "VIP Lounge" },
  { gradient: "from-teal-600 to-cyan-800", label: "Dining Area" },
  { gradient: "from-purple-600 to-violet-800", label: "Private Booth" },
  { gradient: "from-amber-500 to-yellow-700", label: "Trophy Room" },
];

export default function LoungePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(255, 165, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(90, 158, 172, 0.1) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Cassi Lounge &amp; Sports Bar
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            The Ultimate<br />
            <span className="text-amber-400">Sports Experience</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Where champions unwind. A luxurious sports bar and lounge featuring live matches,
            gourmet food, craft drinks, and an atmosphere unlike any other.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto">
              Reserve a Table
            </Link>
            <a
              href="#menu"
              className="btn-outline-amber w-full sm:w-auto"
            >
              View Menu
            </a>
          </div>
        </div>
      </header>

      {/* Ambiance Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">
                The Ambiance
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Luxury Meets<br />
                <span className="text-brand-teal">Sports Passion</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                The Cassi Lounge was designed to be the perfect post-game destination. 
                Rich textures, ambient lighting, and an electric atmosphere make it the 
                ideal spot whether you have just won a match or want to watch one.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                From private booths for intimate gatherings to open bar seating for 
                spontaneous celebrations &mdash; every corner of the Cassi Lounge is designed 
                for comfort, class, and sports culture.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "12", label: "HD Screens" },
                  { value: "80+", label: "Seating Capacity" },
                  { value: "50+", label: "Menu Items" },
                  { value: "VIP", label: "Private Rooms" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-slate-800 rounded-xl p-4 text-center">
                    <p className="text-2xl font-black text-amber-400">{stat.value}</p>
                    <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {galleryGradients.slice(0, 4).map((item, i) => (
                <div
                  key={i}
                  className={`h-36 bg-gradient-to-br ${item.gradient} rounded-xl flex items-end p-3 group cursor-pointer`}
                  data-placeholder="gallery-image"
                  aria-label={`${item.label} image placeholder`}
                >
                  <span className="text-white/80 text-xs font-medium bg-black/40 rounded-lg px-2 py-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Everything a Sports Fan Needs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From the big screen to the dining table, every detail has been crafted for an
              unforgettable sports entertainment experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loungeFeatures.map((feature) => (
              <div
                key={feature.title}
                className="bg-slate-800 rounded-2xl p-6 hover:bg-slate-700 transition-colors duration-300 group border border-slate-700 hover:border-amber-500/30"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Menu Highlights
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              Fuel for Champions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our kitchen serves up bold flavors and hearty portions. From post-game recovery
              meals to celebration bites &mdash; we have got it all.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {menuItems.map((category) => (
              <div key={category.category} className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700">
                <div className="bg-gradient-to-r from-amber-600 to-orange-700 p-4 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-white font-bold text-lg">{category.category}</h3>
                </div>
                <div className="p-4 space-y-4">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex items-start justify-between gap-3 pb-4 border-b border-slate-700 last:border-0 last:pb-0">
                      <div className="flex-1">
                        <p className="text-white font-semibold text-sm">{item.name}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{item.desc}</p>
                      </div>
                      <span className="text-amber-400 font-bold text-sm flex-shrink-0">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            * Full menu available at the lounge. Prices subject to taxes. Alcohol served to 21+ with valid ID.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Gallery
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
              A Peek Inside the Lounge
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryGradients.map((item, i) => (
              <div
                key={i}
                className={`relative h-48 md:h-56 bg-gradient-to-br ${item.gradient} rounded-2xl overflow-hidden cursor-pointer group`}
                data-placeholder="gallery-image"
                aria-label={`${item.label} image placeholder`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="text-white font-semibold text-sm bg-black/40 rounded-lg px-3 py-1 backdrop-blur-sm">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Reserve Your Table at the Cassi Lounge
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Tables fill up fast on match days. Book in advance to secure your spot for
            the best sports viewing experience in the city.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-700 font-bold rounded-lg text-base transition-all duration-300 hover:bg-amber-50 hover:shadow-xl w-full sm:w-auto"
            >
              Reserve a Table
            </Link>
            <a
              href="https://wa.me/919123456789"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg text-base transition-all duration-300 hover:bg-white/10 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enquire Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
