const items = [
  "✦ Ghostwriting",
  "✦ Book Editing",
  "✦ Cover Design",
  "✦ Book Publishing",
  "✦ Publishing & Distribution",
  "✦ Book Marketing",
  "✦ Audiobooks",
  "✦ Audiobook Recording",
  "✦ Book Printing",
  "✦ Book Promotion",
  "✦ Book Trailer",
  "✦ Digital Marketing",
  "✦ Formatting Services",
  "✦ eBook Writing",
  "✦ Author Marketing",
  "✦ Blog Writing",
  "✦ Article Writing",
  "✦ Web Content Writing",
  "✦ Author Website",
  "✦ Book Illustrations",
  "✦ Children's Book Writing",
  "✦ Children's Book Publication",
  "✦ Business Proposal Writing",
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
