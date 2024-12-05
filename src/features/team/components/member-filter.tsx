import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, Search } from "lucide-react";

export default function MembersFilter() {
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
              {["Technical", "Interview"].map((type) => (
                <Button variant="outline">{type}</Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
