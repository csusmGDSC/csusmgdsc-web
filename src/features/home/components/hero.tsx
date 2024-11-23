"use client";

import { IoMdAlert } from "react-icons/io";
import DotPattern from "@/components/background/dot-background";
import Ripple from "@/components/background/ripple-background";
import { Announcement } from "@/components/ui/announcement";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { Link } from "react-router-dom";

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
      <div className="px-2 md:px-0 flex flex-col justify-center items-center custom-max-width gap-6">
        <Announcement
          onClick={() => {}}
          text="Accepting 2024 Applications"
          color="blue"
        />

        <h1
          className="text-center text-2xl md:text-3xl lg:text-5xl
            font-semibold text-primary z-10]"
        >
          Google Developer Student Club
        </h1>

        <h2 className="text-center text-sm md:text-lg lg:text-xl text-foreground/50">
          California State University, San Marcos
        </h2>

        <p className="text-center text-foreground/70 mb-6">{description}</p>

        <Link to="/join">
          <PulsatingButton
            className="m-auto px-28 md:m-0 h-10 rounded-md
            bg-blue z-10 hover:bg-blue/80 gap-2 text-white group"
          >
            Get Involved
          </PulsatingButton>
        </Link>

        <a
          className="flex items-center gap-2 hover:underline text-blue transition-colors"
          href="https://gdsc.community.dev/"
          target="_blank"
        >
          <IoMdAlert size={20} /> Learn More
        </a>
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
