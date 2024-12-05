"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { MdMenu } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

// TO-DO: Keep links in different place
const links = [
  {
    name: "Home",
    ref: "/",
  },
  {
    name: "Team",
    ref: "/team",
  },
  {
    name: "Events",
    ref: "/events",
  },
  {
    name: "Projects",
    ref: "/projects",
  },
  {
    name: "Resources",
    ref: "/resources",
  },
] as const;

/**
 * A functional component that renders the header section of the website.
 * It includes the GDSC logo, navigation links, and authentication buttons.
 *
 * @return {JSX.Element} The JSX element representing the header section.
 */
const Header = () => {
  const pathname = useLocation().pathname;

  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "w-full h-[4.5rem] items-center flex flex-col fixed top-0 z-[40] bg-background",
        hasShadow &&
          "shadow-md transition-shadow duration-700 ease-in-out border-b border-b-border"
      )}
    >
      <div className="h-full flex flex-row justify-center lg:justify-between items-center custom-max-width">
        {/* GDSC logo, Click on it should bring back to root page*/}
        <Link to="/">
          <img
            src="/images/club/logo-title-light.png"
            alt="navbar-logo"
            className="hidden lg:block w-[350px] h-auto"
          />
        </Link>

        {/* Navigation links */}
        <nav className="mx-4 sm:mx-0 w-full sm:w-auto h-full flex items-center justify-between sm:gap-6">
          {/* WEBSITE MENU, DOES NOT SHOW ON MOBILE */}
          <ul className="hidden sm:flex flex-row space-x-6 h-full">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className={cn(
                    "text-foreground/70 h-full flex items-center border-b-4 text-sm hover:cursor-pointer hover:text-foreground transition",
                    pathname === link.ref ? "border-blue" : "border-background"
                  )}
                  to={link.ref}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* MOBILE TRIGGER MENU, DOES NOT SHOW ON WEBSITE */}
          <Sheet>
            <SheetTrigger className="flex p-3 flex-col items-center justify-center sm:hidden border border-border rounded-sm">
              <MdMenu />
            </SheetTrigger>
            <SheetContent side="left">
              <SheetTitle>
                <p>GDSC CSUSM</p>
              </SheetTitle>
              <hr />
              <ul className="flex flex-col gap-2 h-full">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      className={cn(
                        "text-foreground/70 flex items-center hover:cursor-pointer hover:text-foreground transition",
                        pathname === link.ref ? "text-blue" : ""
                      )}
                      to={link.ref}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>

          <Button>Sign In</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
