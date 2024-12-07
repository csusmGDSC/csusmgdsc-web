"use client";

import { Link } from "react-router-dom";
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface LinkItem {
  label: string;
  path: string;
}

interface LinkSectionProps {
  title: string;
  links: LinkItem[];
}

/**
 * Renders a list of links for navigation.
 * @param {LinkSectionProps} props - Properties passed to the component.
 * @returns {JSX.Element} A section containing links and a title.
 */
const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col text-sm gap-2 pt-10 pl-4 sm:pl-0 sm:ml-auto [&>h1]:font-semibold">
      <h1>{title}</h1>
      {links.map(({ label, path }) => (
        <Link key={label} to={path}>
          <Button variant="nav" className="p-0 m-0 h-fit">
            {label}
          </Button>
        </Link>
      ))}
    </div>
  );
};

/**
 * Main footer component containing logo, link sections, and social media icons.
 * @returns {JSX.Element} The website footer with quick links, resources, and social media.
 */
const Footer: React.FC = () => {
  const quickLinks: LinkItem[] = [
    { label: "Home", path: "/" },
    { label: "Events", path: "/events" },
    { label: "Projects", path: "/projects" },
    { label: "Resources", path: "/resources" },
  ];

  const resourceLinks: LinkItem[] = [
    { label: "FAQ", path: "/resources" },
    { label: "Terms of Service", path: "/privacy" },
    { label: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <footer>
      {/* Main footer content with logo and links */}
      <div className="w-full sm:h-[12rem] pb-4 shadow-inner sm:pb-0 border-t border-b-border bg-background items-center flex flex-col mt-20">
        <div className="h-full grid grid-cols-1 sm:grid-cols-4 custom-max-width">
          <div className="flex flex-col items-center h-full pt-10 sm:col-span-2 pl-4 md:pl-0 mr-auto">
            <img
              src="/images/club/logo-only.png"
              alt="navbar-logo"
              className="w-[80px] h-auto"
            />
          </div>
          <LinkSection title="Quick Links" links={quickLinks} />
          <LinkSection title="Resources" links={resourceLinks} />
        </div>
      </div>

      {/* Footer bottom with copyright and social media icons */}
      <div className="w-full h-12 flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-between custom-max-width">
          <Link to="https://github.com/csusmGDSC/csusmgdsc-web" target="_blank">
            <Button variant="link">
              Improve this page on GitHub <ExternalLink />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
