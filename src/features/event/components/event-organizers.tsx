export default function EventOrganizers() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Organizers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          {
            name: "Sarah Chen",
            role: "GDSC Lead",
            image: "/images/person.jpg",
          },
          {
            name: "Alex Kumar",
            role: "ML Track Lead",
            image: "/images/person.jpg",
          },
          {
            name: "Maria Garcia",
            role: "Event Coordinator",
            image: "/images/person.jpg",
          },
        ].map((organizer) => (
          <div
            key={organizer.name}
            className="border border-border rounded-sm shadow-sm p-4 flex items-center space-x-4"
          >
            <img
              src={organizer.image}
              alt={organizer.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-medium">{organizer.name}</p>
              <p className="text-sm text-gray-600">{organizer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
