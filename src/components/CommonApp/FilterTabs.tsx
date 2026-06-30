type FilterTabsProps = {
  items: string[];
  selected: string;
  onChange: (value: string) => void;
};

export default function FilterTabs({
  items,
  selected,
  onChange,
}: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`
            rounded-xl px-5 py-3 text-sm font-semibold transition
            ${
              selected === item
                ? `
                  bg-gradient-to-r
                  from-[#1e3a6d]
                  to-[#3b82f6]
                  text-white
                  shadow-lg shadow-blue-500/20
                `
                : `
                  border border-slate-200
                  bg-white text-slate-600
                `
            }
          `}
        >
          {item}
        </button>
      ))}
    </div>
  );
}