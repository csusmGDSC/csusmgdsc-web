export const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <span>
      <h2 className="text-3xl font-bold text-primary">{title}</h2>
      <p className="[word-spacing:-5px] font-mono text-blue">{subtitle}</p>
    </span>
  );
};
