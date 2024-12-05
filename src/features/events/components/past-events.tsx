import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const pastEvents = [
  {
    id: 1,
    name: "Tech Meetup",
    date: "2023-12-15",
    type: "meetup",
    tags: ["tech", "networking"],
    location: "Innovation Hub",
  },
  {
    id: 2,
    name: "Startup Pitch Night",
    date: "2023-12-20",
    type: "pitch",
    tags: ["startups", "entrepreneurship"],
    location: "Downtown Hall",
  },
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
  {
    id: 5,
    name: "Hackathon Kickoff",
    date: "2024-03-05",
    type: "hackathon",
    tags: ["coding", "competition"],
    location: "Tech Park",
  },
  {
    id: 6,
    name: "Women in Tech Summit",
    date: "2024-03-25",
    type: "summit",
    tags: ["diversity", "inclusion"],
    location: "Civic Center",
  },
  {
    id: 7,
    name: "Spring Gala",
    date: "2024-04-15",
    type: "gala",
    tags: ["fundraising", "networking"],
    location: "Grand Ballroom",
  },
  {
    id: 8,
    name: "Data Science Workshop",
    date: "2024-05-10",
    type: "workshop",
    tags: ["data", "learning"],
    location: "University Hall",
  },
  {
    id: 9,
    name: "AI Seminar",
    date: "2024-06-05",
    type: "seminar",
    tags: ["AI", "research"],
    location: "Tech Auditorium",
  },
  {
    id: 10,
    name: "Summer Hackathon",
    date: "2024-07-20",
    type: "hackathon",
    tags: ["summer", "competition"],
    location: "Campus Lab",
  },
  {
    id: 11,
    name: "Open Source Contribution Day",
    date: "2024-08-12",
    type: "volunteer",
    tags: ["open source", "coding"],
    location: "Tech Center",
  },
  {
    id: 12,
    name: "Cybersecurity Awareness Forum",
    date: "2024-09-18",
    type: "forum",
    tags: ["security", "awareness"],
    location: "Tech Convention Center",
  },
  {
    id: 13,
    name: "Developer's Day Out",
    date: "2024-10-01",
    type: "social",
    tags: ["developers", "relaxation"],
    location: "Seaside Resort",
  },
  {
    id: 14,
    name: "Blockchain Symposium",
    date: "2024-10-22",
    type: "symposium",
    tags: ["blockchain", "tech"],
    location: "Crypto Hall",
  },
  {
    id: 15,
    name: "Fall Coding Camp",
    date: "2024-11-05",
    type: "camp",
    tags: ["coding", "learning"],
    location: "Mountain Retreat",
  },
  {
    id: 16,
    name: "Design Thinking Workshop",
    date: "2024-11-25",
    type: "workshop",
    tags: ["design", "innovation"],
    location: "Creative Studio",
  },
  {
    id: 17,
    name: "End of Year Party",
    date: "2024-12-10",
    type: "party",
    tags: ["celebration", "fun"],
    location: "City Banquet Hall",
  },
  {
    id: 18,
    name: "Leadership Summit",
    date: "2025-01-15",
    type: "summit",
    tags: ["leadership", "mentorship"],
    location: "Hotel Conference Room",
  },
  {
    id: 19,
    name: "Tech Career Fair",
    date: "2025-02-08",
    type: "career",
    tags: ["jobs", "networking"],
    location: "Exhibition Hall",
  },
  {
    id: 20,
    name: "Code for Good Initiative",
    date: "2025-03-20",
    type: "volunteer",
    tags: ["social impact", "coding"],
    location: "Community Center",
  },
];

export default function PastEvents() {
  return (
    <section id="past-events">
      <Title>Past Events</Title>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pastEvents.map((event) => (
          <Link key={event.id} to={`/events/${event.id}`}>
            <div
              key={event.id}
              className="group hover:shadow-md transition-shadow border rounded-sm p-4"
            >
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
              <Button
                className="mt-4 py-4 px-0 text-blue group-hover:text-darkBlue"
                variant="nav"
              >
                <ExternalLink className="w-4 h-4" /> View Event
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
