"use client";

import { CiInstagram } from "react-icons/ci";
import { FaDiscord, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from "react";

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
        <Link
          key={label}
          to={path}
          className="hover:underline hover:text-blue transition-colors"
        >
          {label}
        </Link>
      ))}
    </div>
  );
};

/**
 * Renders social media icons with links.
 * @returns {JSX.Element} A group of social media icons with external links.
 */
const SocialMediaIcons: React.FC = () => {
  return (
    <div className="flex flex-row gap-4 text-neutral-700">
      <a
        href="https://www.instagram.com/gdsc.csusm/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <CiInstagram
          className="hover:text-blue hover:cursor-pointer transition"
          size={20}
        />
      </a>
      <a
        href="https://x.com/dsccsusm?lang=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter
          className="hover:text-blue hover:cursor-pointer transition"
          size={20}
        />
      </a>
      <FaLinkedin
        className="hover:text-blue hover:cursor-pointer transition"
        size={20}
      />
      <FaDiscord
        className="hover:text-blue hover:cursor-pointer transition"
        size={20}
      />
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
          <div className="flex flex-col items-center h-full pt-10 sm:col-span-2 sm:mr-auto">
            <img
              src="/images/club/logo-title-light.png"
              alt="navbar-logo"
              className="w-[350px] h-auto"
            />
          </div>
          <LinkSection title="Quick Links" links={quickLinks} />
          <LinkSection title="Resources" links={resourceLinks} />
        </div>
      </div>

      {/* Footer bottom with copyright and social media icons */}
      <div className="w-full h-12 flex flex-col items-center border-t justify-center bg-gray-50">
        <div className="flex flex-row items-center justify-between custom-max-width">
          <span className="text-neutral-400 font-semibold text-xs px-2 md:px-0">
            © 2024 CSUSM
          </span>
          <SocialMediaIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
