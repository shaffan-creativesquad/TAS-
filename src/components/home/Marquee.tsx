const items = [
  "✦ Amazon KDP",
  "✦ Barnes & Noble",
  "✦ Apple Books",
  "✦ Audible / ACX",
  "✦ Kobo",
  "✦ Google Play Books",
  "✦ IngramSpark",
  "✦ Scribd",
  "✦ Draft2Digital",
  "✦ Findaway Voices",
  "✦ OverDrive",
  "✦ Smashwords",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-primary py-3.5 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="text-white/90 text-sm font-semibold mx-8 shrink-0">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
