"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Component that shows the hero (top section) of the web-page
 */
const Hero = () => {
  const images = ["/images/group-1.jpg", "/images/group-2.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Auto-advance images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="relative w-full h-[30rem] items-center flex flex-col
      justify-center overflow-hidden border-b border-border bg-primary-foreground"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          )}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-sm"
            style={{
              backgroundImage: `url(${image})`,
              filter: "brightness(35%)", // Darkens the image slightly
            }}
          />
        </div>
      ))}

      {/* Hero Section Content */}
      <div className="px-2 md:px-0 flex flex-col justify-center items-center custom-max-width gap-6 z-10">
        <h1
          className="text-center text-2xl md:text-3xl lg:text-6xl
            font-medium text-secondary"
        >
          Google Developer Student Club
        </h1>

        <h2 className="text-center text-lg md:text-xl lg:text-2xl font-medium text-secondary/90">
          California State University, San Marcos
        </h2>

        <p className="text-center text-secondary/90 mb-6">{description}</p>

        <span className="flex gap-4">
          <Link to="/join">
            <Button size="lg">Get Involved</Button>
          </Link>

          <a href="https://developers.google.com/community" target="_blank">
            {/** Added a div here for white background behind hover effect */}
            <div className="w-fit h-fit bg-white rounded-lg">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </a>
        </span>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={cn(
              "w-3 h-3 rounded-full",
              index === currentImageIndex ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

// TO-DO: Move static data else-where
const description =
  "University-based community for students interested in developing technical skills, projects, and leadership. ";
