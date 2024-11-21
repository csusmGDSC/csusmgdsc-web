export default function EventDescription() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">About This Event</h2>
      <div>
        <p className="text-gray-700">During this workshop, you'll learn:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Basic concepts of Machine Learning</li>
          <li>How to prepare and clean data</li>
          <li>Training your first ML model</li>
          <li>Best practices and common pitfalls</li>
        </ul>
        <p className="text-gray-700 mt-4">
          No prior experience is required, but basic Python knowledge will be
          helpful. Bring your laptop with Python installed to follow along with
          the exercises.
        </p>
      </div>
    </div>
  );
}
