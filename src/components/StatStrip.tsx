export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

interface StatStripProps {
  stats: StatItem[];
}

export default function StatStrip({ stats }: StatStripProps) {
  return (
    <section className="bg-brand-orange py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-orange-400">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center px-6"
            >
              <span className="text-3xl mb-1">{stat.icon}</span>
              <span className="text-3xl md:text-4xl font-black text-white leading-tight">
                {stat.value}
              </span>
              <span className="text-orange-100 text-sm font-medium mt-1 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
