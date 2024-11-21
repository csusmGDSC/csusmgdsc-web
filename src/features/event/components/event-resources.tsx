import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, FileText, GitBranch } from "lucide-react";

export default function EventResources() {
  return (
    <div className="gap-6">
      {/* RSVP Card */}
      <div className="flex gap-2">
        <Card className="flex-1">
          <CardHeader>
            <CardTitle className="text-lg">Event Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <a
              href="#"
              className="flex items-center text-blue hover:text-blue/80 transition"
            >
              <FileText className="mr-2 h-4 w-4" />
              Workshop Slides
            </a>
            <a
              href="#"
              className="flex items-center text-blue hover:text-blue/80 transition"
            >
              <GitBranch className="mr-2 h-4 w-4" />
              Project Repository
            </a>
            <a
              href="#"
              className="flex items-center text-blue hover:text-blue/80 transition"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Additional Resources
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
