"use client";

import { Card } from "@/components/ui/card";
import { HomeButton } from "./home-button";

const FormCard = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <HomeButton />
      <Card className="">
        <div className="transition h-full lg:h-auto w-[500px] md:h-auto rounded-sm relative flex flex-col">
          {/* HEADER */}
          <div className="flex items-center p-6 rounded-t justify-center border-border relative border-b-[1px]">
            <div className="text-lg font-semibold text-primary">{label}</div>
          </div>

          {/* BODY */}
          <div className="relative p-6 flex-auto">{children}</div>
        </div>
      </Card>
    </div>
  );
};

export default FormCard;
