"use client";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DotPattern from "@/components/background/dot-background";
import Ripple from "@/components/background/ripple-background";

/**
 * Component that shows the hero (top section) of the web-page
 */
const Hero = () => {
  return (
    <section
      className="relative w-full h-[30rem] items-center flex flex-col
      justify-center overflow-hidden border-b border-border bg-primary-foreground"
    >
      {/* Background */}
      <DotPattern className="[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]" />

      {/* Hero Section Content */}
      <div className="px-2 md:px-0 flex flex-col justify-center items-center custom-max-width gap-6 z-10">
        <h1
          className="text-center text-2xl md:text-3xl lg:text-5xl
            font-semibold text-primary"
        >
          Google Developer Student Club
        </h1>

        <h2 className="text-center text-lg md:text-xl lg:text-2xl font-semibold text-foreground/50">
          California State University, San Marcos
        </h2>

        <p className="text-center text-foreground/70 mb-6">{description}</p>

        <span className="flex gap-4">
          <Link to="/join">
            <Button size="lg">Get Involved</Button>
          </Link>

          <Link to="/">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </span>
      </div>

      <Ripple
        className="!-bottom-[132rem]"
        numCircles={8}
        mainCircleSize={1800}
        mainCircleOpacity={0.1}
      />
    </section>
  );
};

export default Hero;

// TO-DO: Move static data else-where
const description =
  "University-based community for students interested in developing technical skills, projects, and leadership. ";
