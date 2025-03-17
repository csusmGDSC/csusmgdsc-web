import { IconType } from "react-icons";
import { BiSolidBarChartAlt2 } from "react-icons/bi";
import { BsCheck2Circle, BsFillSuitDiamondFill } from "react-icons/bs";
import { IoCubeOutline } from "react-icons/io5";
import { useTheme } from "@/lib/providers";

export default function Benefits() {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row items-center gap-20" id="benefits">
      <div className="w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-primary">
          Built on strong foundations
        </h1>
        <p className="mb-8 font-mono text-blue">
          A community driven to give students the best software engineering
          experience
        </p>
        <hr />
        <dl className="grid-cols-2 grid my-8 gap-y-8">
          <Row
            label="Welcoming"
            desc="We teach every passionate student that's interested in developing skills."
          />
          <Row
            label="Collaboration"
            desc="GDSC is built on collaboration and engagement between proactive students."
          />
          <Row
            label="Rewarding"
            desc="Students will learn modern, up-to-date technologies used in the industry."
          />
        </dl>
        <hr />
        <div className="grid grid-cols-2 md:grid-cols-4 w-full mt-8 gap-4">
          {[
            {
              title: "Schedule Friendly",
              icon: BsCheck2Circle,
              color: "text-blue",
            },
            {
              title: "Cross-team projects",
              icon: IoCubeOutline,
              color: "text-green",
            },
            {
              title: "Active Community",
              icon: BsFillSuitDiamondFill,
              color: "text-yellow",
            },
            {
              title: "Constant Growth",
              icon: BiSolidBarChartAlt2,
              color: "text-red",
            },
          ].map((item, index) => (
            <Thing
              title={item.title}
              icon={item.icon}
              className="col-span-1 flex-1 flex items-center"
              color={item.color}
              key={index}
            />
          ))}
        </div>
      </div>
      <div
        className="relative hidden md:flex w-1/2 max-w-[32rem]
          items-center justify-center overflow-hidden"
      >
        {/* <IconCloud iconSlugs={slugs} /> */}
        <img
          src={
            theme == "light"
              ? "/images/stock/stock-5.jpeg"
              : "/images/stock/stock-5-dark.jpeg"
          }
          alt="benefits image"
        />
      </div>
    </div>
  );
}

const Row = ({ label, desc }: { label: string; desc: string }) => {
  return (
    <div className="contents">
      <dt className="font-semibold text-primary/90">{label}</dt>
      <dd className="text-muted-foreground">{desc}</dd>
    </div>
  );
};

interface ThingProps {
  title: string;
  icon: IconType;
  color: string;
  className?: string;
}

const Thing = ({ title, icon: Icon, color, className }: ThingProps) => {
  return (
    <div className={className}>
      <span>
        <Icon className={`${color}`} />
        {title}
      </span>
    </div>
  );
};
