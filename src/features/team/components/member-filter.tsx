import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Calendar, Filter, Search } from "lucide-react";
import { useState } from "react";

export default function MembersFilter() {
  const [currentYear, setCurrentYear] = useState(2025);

  return (
    <div className="bg-white rounded-sm border border-border p-6">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="text-primary w-5 h-5 absolute top-1/2 right-3 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search for a member"
            className="focus:ring-blue focus:ring-2 focus:outline-none"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Filter className="w-4 h-4" />
              Filter by branch
            </div>
            <div className="flex flex-wrap gap-2">
              {["Technical", "Interview", "Marketing", "Other"].map((type) => (
                <Button variant="outline">{type}</Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Calendar className="w-4 h-4" />
            Filter by year
          </div>
          <ul className="hidden sm:flex flex-row gap-2 h-full">
            {[2025, 2024].map((year, index) => (
              <li key={index}>
                <Button
                  variant="nav"
                  className={cn(
                    "text-foreground/70 h-full border-b-4 text-sm rounded-none px-4 m-0 hover:text-foreground transition",
                    currentYear === year ? "border-blue" : "border-background"
                  )}
                  onClick={() => setCurrentYear(year)}
                >
                  {year}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
