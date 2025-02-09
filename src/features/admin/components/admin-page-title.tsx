import { Separator } from "@/components/ui/separator";
import React from "react";

export const AdminPageTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="ml-4 text-primary/90 font-medium text-xl">{children}</h1>
      <Separator className="mt-4" />
    </>
  );
};
