import { Calendar, Clock, MapPin } from "lucide-react";

export default function EventSummary() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">
          Introduction to Machine Learning Workshop
        </h1>
        <button className="py-2 px-4 bg-blue text-white rounded-lg flex gap-2 items-center">
          <Calendar className="mr-3" /> Add to calendar
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-blue/20 text-blue rounded-full text-sm font-medium">
          Workshop
        </span>
        <span className="px-3 py-1 bg-green/20 text-green rounded-full text-sm font-medium">
          Beginner Friendly
        </span>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
          Machine Learning
        </span>
        <span className="px-3 py-1 bg-yellow/20 text-yellow rounded-full text-sm font-medium">
          Python
        </span>
        <span className="px-3 py-1 bg-red/20 text-red rounded-full text-sm font-medium">
          Hands-on
        </span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center">
          <Calendar className="mr-3" />
          <span>Saturday, November 30, 2024</span>
        </div>

        <div className="flex items-center">
          <MapPin className="mr-3" />
          <span>Computer Science Building, Room 302</span>
        </div>

        <div className="flex items-center">
          <Clock className="mr-3" />
          <span>2:00 PM - 5:00 PM EST</span>
        </div>
      </div>
    </div>
  );
}
