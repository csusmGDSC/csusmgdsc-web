import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { BiLogoGoLang } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { SiDocker, SiReact, SiTypescript } from "react-icons/si";

export const ProjectTechMarquee = () => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="text-lg font-bold p-0">
        Core focus on high-quality, industry-standard tools
      </CardHeader>
      <CardContent className="p-0">
        We want our students to dive into topics used at the industry level.
        These technologies are{" "}
        <span className="font-bold">challenging to learn</span>, but will{" "}
        <span className="font-bold">serve you well</span> if you commit to them.
        There is no coursework or organization on campus that gives this much
        quality.
        <div className="bg-background overflow-hidden mt-4">
          <div className="group relative ">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-sm text-blue">
                  Powering the best tools
                </p>
              </div>
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                  <BiLogoGoLang size={40} />
                  <SiTypescript size={40} />
                  <GrGithub size={40} />
                  <FaAws size={40} />
                  <SiDocker size={40} />
                  <SiReact size={40} />
                </InfiniteSlider>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
