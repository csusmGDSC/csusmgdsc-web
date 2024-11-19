import { useState } from "react";
import {
  Search,
  Calendar,
  MapPin,
  Filter,
  Tag,
  ExternalLink,
  Clock,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const EventsPageee = () => {
  const [selectedType, setSelectedType] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");

  const upcomingEvents = [
    {
      id: 1,
      name: "Q2 Planning Session",
      date: "2024-04-25",
      time: "10:00 AM",
      room: "Conference Room A",
      capacity: 50,
      type: "leetcode",
      tags: ["planning", "quarterly"],
      location: "Conference Room A",
      description:
        "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
    },
    {
      id: 2,
      name: "Tech Workshop",
      date: "2024-05-15",
      type: "workshop",
      time: "10:00 AM",
      room: "Conference Room A",
      capacity: 50,
      tags: ["technical", "learning"],
      location: "Virtual",
      description:
        "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
    },
    {
      id: 3,
      name: "Tech Workshop",
      date: "2024-05-15",
      type: "workshop",
      time: "10:00 AM",
      room: "Conference Room A",
      capacity: 50,
      tags: ["technical", "learning"],
      location: "Virtual",
      description:
        "This is a description of the event. It should be at least a few sentences long. We love short descriptions.",
    },
  ];

  const pastEvents = [
    {
      id: 3,
      name: "Annual Conference",
      date: "2024-01-20",
      type: "conference",
      tags: ["annual", "networking"],
      location: "Convention Center",
    },
    {
      id: 4,
      name: "Team Building",
      date: "2024-02-10",
      type: "social",
      tags: ["team", "culture"],
      location: "Park Plaza",
    },
  ];

  const typeColors = {
    workshop: "bg-blue/20 text-blue",
    leetcode: "bg-green/20 text-green",
    hackathon: "bg-purple-100 text-purple-800",
    social: "bg-yellow/20 text-yellow",
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Filters Section */}
      <div className="bg-white rounded-lg border p-6 mb-8">
        <div className="space-y-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search events..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Filter className="w-4 h-4" />
                Event Type
              </div>
              <div className="flex flex-wrap gap-2">
                {["allsss", "meeting", "workshop"].map((type) => (
                  <button
                    key={type}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedType === type
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Tag className="w-4 h-4" />
                Tags
              </div>
              <div className="flex flex-wrap gap-2">
                {["test", "test2", "test3"].map((tag) => (
                  <button
                    key={tag}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                      ["test1"].includes(tag)
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => {}}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Upcoming Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {upcomingEvents.map((event: any) => (
              <Card className="overflow-hidden transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800 flex justify-between">
                    {event.name}

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        typeColors[event.type as keyof typeof typeColors] ||
                        "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {event.type}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Event Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-5 h-5" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-5 h-5" />
                      <span>{event.capacity} seats</span>
                    </div>
                  </div>

                  {/* Description */}
                  <CardDescription className="text-gray-600">
                    {event.description}
                  </CardDescription>

                  {/* Tags */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-4 h-4 text-gray-600" />
                    {event.tags.map((tag: any, tagIndex: any) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="pt-4">
                    <a
                      href={event.registrationLink}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Event
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Events Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Past Events</CardTitle>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Select year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pastEvents.map((event) => (
              <div key={event.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{event.name}</h3>
                    <p className="text-sm text-gray-500">{event.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">
                      {new Date(event.date).toLocaleDateString()}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">
                      {event.type}
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex gap-2">
                  {event.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventsPageee;
