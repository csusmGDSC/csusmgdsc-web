import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SectionTitle } from "@/features/base";

const About = () => {
  return (
    <>
      <section id="about" className="-mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="h-full flex flex-col justify-center gap-6">
            <SectionTitle
              title="Insights About Us"
              subtitle="Google Developer Student Club"
            />

            <p className="text-primary/80">
              We are a community of software engineers at{" "}
              <Link
                to="https://www.csusm.edu"
                target="_blank"
                className="text-blue hover:underline"
              >
                CSUSM
              </Link>
              , dedicated to learning fundementals of software development. Our
              mission is to empower students with the skills and knowledge
              necessary to succeed in the tech industry.
            </p>
            <Link to="/team" className="w-fit">
              <Button variant="outline" className="px-10">
                Check Our Team
              </Button>
            </Link>
          </div>

          <img
            src="/images/stock/stock-2.jpeg"
            alt="about-image"
            className="hidden md:block"
          />
        </div>
      </section>
    </>
  );
};

export default About;
