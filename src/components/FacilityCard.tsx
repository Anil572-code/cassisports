import Link from "next/link";

export interface FacilityCardProps {
  title: string;
  emoji: string;
  description: string;
  features: string[];
  gradient: string;
  href?: string;
}

export default function FacilityCard({
  title,
  emoji,
  description,
  features,
  gradient,
  href = "/contact",
}: FacilityCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md card-hover group border border-gray-100">
      {/* Image Placeholder */}
      <div className={`relative h-48 ${gradient} flex items-center justify-center overflow-hidden`}>
        <span className="text-6xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

        {/* Features */}
        <ul className="space-y-1.5 mb-5">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
              <svg
                className="w-4 h-4 text-brand-orange flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <Link href={href} className="btn-primary text-sm w-full">
          Book Now
        </Link>
      </div>
    </article>
  );
}
