import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Coffee } from "lucide-react";

export default function ActivityGallery() {
  const activities = [
    {
      title: "Leetcode",
      description:
        "Weekly hands-on sessions solving leetcode problems collaboratively",
      date: "Every Tuesday",
      category: "Workshop",
      icon: <Code className="w-6 h-6" />,
      imageUrl: "/images/group-1.jpg",
    },
    {
      title: "Community Meetups",
      description: "Casual gatherings to network and share ideas",
      date: "Every Day",
      category: "Social",
      icon: <Coffee className="w-6 h-6" />,
      imageUrl: "/images/group-2.jpg",
    },
  ];

  return (
    <div className="w-full">
      <div className="w-full mx-auto">
        <div className=" mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Community in Action
          </h2>
          <p className="text-xl text-gray-600">
            See what we've been up to and join our thriving tech community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={activity.imageUrl}
                    alt={activity.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-mono text-blue">
                      {activity.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {activity.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            <Code /> View All Activities
          </Button>
        </div>
      </div>
    </div>
  );
}
