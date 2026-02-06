import { categories } from "@/lib/mock-data";

interface FeedFiltersProps {
  active: string;
  onSelect: (category: string) => void;
}

export default function FeedFilters({ active, onSelect }: FeedFiltersProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-2 px-4 lg:px-0 pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
              active === cat
                ? "gradient-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
