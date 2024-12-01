interface EventDescriptionProps {
  description: string;
}

export default function EventDescription({
  description,
}: EventDescriptionProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">About This Event</h2>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}
