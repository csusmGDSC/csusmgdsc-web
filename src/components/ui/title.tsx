import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

/**
 * Title component that just is just a styled heading text. Used frequently in the website.
 * The reason this exists: Consistency with styling, and less repetitive time to remake the same html elements
 * @param {string} heading Text that describes the following section
 */
const Title = ({ children }: TitleProps) => {
  return (
    <h1 className="text-2xl font-bold text-foreground/80 w-full">{children}</h1>
  );
};

export default Title;
