import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { EVENT_TYPES } from "@/types/gdsc-event";
import { Filter, Search } from "lucide-react";

interface EventsFilterProps {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

export default function EventsFilter({
  selectedTags,
  setSelectedTags,
}: EventsFilterProps) {
  return (
    <div className="bg-white rounded-sm border border-border p-6">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="text-primary w-5 h-5 absolute top-1/2 right-3 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Search events..."
            className="focus:ring-blue focus:ring-2 focus:outline-none"
          />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Filter className="w-4 h-4" />
              Event Type
            </div>
            <div className="flex flex-wrap gap-2">
              {EVENT_TYPES.map((type) => (
                <button
                  key={type}
                  className={cn(
                    "px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200",
                    {
                      "bg-blue text-white": selectedTags.includes(type),
                      "bg-gray-100 text-gray-800": !selectedTags.includes(type),
                    }
                  )}
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
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
