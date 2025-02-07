export default function StatCard({
  title,
  value,
  Icon,
  color,
}: {
  title: string;
  value: string | number;
  Icon: any;
  color: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-sm border border-border p-4">
      <li className="w-full p-2 flex items-center gap-4">
        <span className={`p-4 rounded-full bg-${color} bg-opacity-10`}>
          <Icon size={30} className={`text-${color}`} />
        </span>
        <span>
          <h1 className="text-lg lg:text-2xl font-semibold text-primary/90">
            {value}
          </h1>
          <h2 className="lg:text-lg text-primary/70">{title}</h2>
        </span>
      </li>
    </div>
  );
}
