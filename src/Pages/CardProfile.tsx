import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About",
    path: "/about"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];
export const CardProfile: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      <div
        className={cn(
          "sticky top-0 z-10 bg-gray-300 p-4 w-full transition-all duration-300",
          isScrolled ? "shadow-md bg-gray-100" : ""
        )}
      >
        {/* logo */}
        <div className="flex items-center justify-between">
          <div className="w-fit p-1 rounded-md bg-red-500">
            <p className="text-white">MD</p>
          </div>
          {/* desktop link */}
          <nav className="hidden space-x-4 md:block">
            {links.map((link) => (
              <NavLink to={link.path}>{link.name}</NavLink>
            ))}
          </nav>

          {/* mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMobile(!isMobile)}
          >
            <div className="relative w-5 h-5 flex flex-col justify-center">
              <span
                className={cn(
                  "absolute h-px w-full bg-current transition-all duration-300",
                  isMobile ? "rotate-45" : "-translate-y-1.5"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-full bg-current transition-all duration-300",
                  isMobile ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-full bg-current transition-all duration-300",
                  isMobile ? "-rotate-45" : "translate-y-1.5"
                )}
              />
            </div>
          </Button>
        </div>

        {/* mobile content */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMobile ? "max-h-64 mt-4 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsMobile(false)}
                    className={({ isActive }) =>
                      cn(
                        "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-red-100 text-red-700 border border-red-200"
                          : "text-gray-700 hover:bg-gray-200"
                      )
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {/* content with side line */}
      <div className="flex items-end">
        {/* line */}
        <h1 className="text-2xl">New Header</h1>
        <div className="h-px flex-1 bg-red-500"></div>
      </div>
    </div>
  );
};
