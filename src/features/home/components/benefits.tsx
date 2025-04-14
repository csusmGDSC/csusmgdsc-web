import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { SectionTitle } from "@/features/base";
import { User, Zap } from "lucide-react";

export default function Benefits() {
  return (
    <section id="benefits">
      <div className="mt-4 grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
        <div className="relative mt-6 sm:mt-0 flex items-center">
          <Carousel className="z-10">
            <CarouselContent>
              <CarouselItem className="overflow-hidden rounded-md">
                <img
                  src="/images/group-1.jpg"
                  className="object-cover w-full h-full rounded-md"
                />
              </CarouselItem>
              <CarouselItem className="overflow-hidden rounded-md">
                <img
                  src="/images/group-2.jpg"
                  className="object-cover w-full h-full rounded-md"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </div>
        <div className="relative space-y-8">
          <SectionTitle
            title="Built on strong foundations"
            subtitle="A community driven to give students the best software engineering experience"
          />

          <p className="text-muted-foreground">
            We emphasize on high-quality, impact-driven core values that{" "}
            <span className="font-semibold text-primary">
              transform our students into software engineers
            </span>
            . We inspire innovation and bridge the gap between coursework and
            industry practice.
          </p>

          <Separator />

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="size-4" />
                <h3 className="text-sm font-medium">Success-Driven</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Our students have opened avenues into job offers
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <User className="size-4" />
                <h3 className="text-sm font-medium">Student-led</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Led and built by engineering students, for engineering students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
