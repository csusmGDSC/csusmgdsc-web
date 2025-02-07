import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EVENT_TYPES } from "@/types/gdsc-event";
import { Filter, Search } from "lucide-react";

interface EventsFilterProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
  setSearchQuery: (string: string) => void;
}

export default function EventsFilter({
  selectedTags,
  setSelectedTags,
  setSearchQuery,
}: EventsFilterProps) {
  return (
    <div className="rounded-sm border border-border p-6">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="text-primary w-5 h-5 absolute top-1/2 right-3 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search events..."
            className="focus:ring-blue focus:ring-2 focus:outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-primary">
              <Filter className="w-4 h-4" />
              Event Type
            </div>
            <div className="flex flex-wrap gap-2">
              {EVENT_TYPES.map((type) => (
                <Button
                  key={type}
                  className={
                    selectedTags.includes(type)
                      ? "border-blue/80 bg-blue/10 text-darkBlue"
                      : ""
                  }
                  variant="outline"
                  onClick={() => {
                    if (selectedTags.includes(type)) {
                      setSelectedTags(
                        selectedTags.filter((tag) => tag !== type)
                      );
                    } else {
                      setSelectedTags([...selectedTags, type]);
                    }
                  }}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
