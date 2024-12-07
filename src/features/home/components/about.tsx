import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const featureCards = [
    {
      icon: <Code className="w-24 h-24" style={{ color: "#1D4ED8" }} />,
      title: "Technical Skills",
      description:
        "Develop cutting-edge skills through hands-on workshops and collaborative projects.",
      backgroundImage: "url('public/images/placeholder/homeBackground-6.jpg')",
    },
    {
      icon: <Users className="w-24 h-24" style={{ color: "#16A34A" }} />,
      title: "Community",
      description:
        "Join a diverse group of student developers passionate about innovation.",
      backgroundImage:
        "url('public/images/placeholder/homebBackground-10.jpg')",
    },
    {
      icon: <Lightbulb className="w-24 h-24" style={{ color: "#F59E0B" }} />,
      title: "Innovation",
      description:
        "Turn your ideas into reality with access to Google technologies and expert mentorship.",
      backgroundImage: "url('public/images/placeholder/homebBackground-5.jpg')",
    },
  ];

  return (
    <>
      <section id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-2 gap-6">
              {featureCards.map((feature, index) => (
                <Card
                  key={index}
                  className={`relative min-h-[300px] overflow-hidden transition-all duration-300 hover:shadow-xl ${
                    index === 2 ? "col-span-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                      backgroundImage: feature.backgroundImage,
                    }}
                  />
                  <CardHeader className="relative z-10 flex flex-col items-center pt-6">
                    {feature.icon}
                    <CardTitle className="mt-4 text-xl font-semibold text-center">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-center text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="h-full flex flex-col justify-center gap-6">
              <span>
                <h2 className="text-4xl font-bold text-gray-800">
                  Insight About Us
                </h2>
                <p className="text-xl font-mono text-blue">
                  Google Developer Student Club
                </p>
              </span>

              <p className="text-gray-600">
                We are a community of software engineers at CSUSM, dedicated to
                learning fundementals of software development. Our mission is to
                empower students with the skills and knowledge necessary to
                succeed in the tech industry.
              </p>
              <Link to="/team" className="w-fit">
                <Button variant="outline" className="px-10">
                  Check Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
