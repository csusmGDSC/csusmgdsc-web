export default function PageContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-center-col">
      <div className="custom-max-width flex flex-col gap-10">{children}</div>
    </div>
  );
}
