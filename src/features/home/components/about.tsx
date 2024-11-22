import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Code, Lightbulb } from "lucide-react";

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
      <section className="py-24">
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
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-3">
                Insight About Us
              </h2>
              <p className="text-xl font-mono text-blue">
                Google Development Student Club
              </p>
              <div className="space-y-4text-xl text-gray-600">
                <p>
                  We are a vibrant community of student developers sponsored by
                  Google Developers. Our mission is to empower students to
                  learn, innovate, and make an impact through technology.
                  Whether you're a beginner or an experienced coder, join us to
                  explore cutting-edge technologies, collaborate on exciting
                  projects, and shape the future of tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
