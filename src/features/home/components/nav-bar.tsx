import { Button } from "@/components/ui/button";

const refs = ["#about", "#branches", "#benefits", "#activity", "#socials"];

export default function NavBar() {
  return (
    <div className="rounded-full bg-background shadow-md z-10 border border-border sticky top-24 px-4 py-2 mx-auto -mb-12 sm:-mb-24 -mt-10 flex flex-row items-center justify-center gap-0 sm:gap-4">
      {refs.map((ref, index) => (
        <a key={index} href={ref} className="font-medium text-primary">
          <Button
            variant="ghost"
            className="text-xs sm:text-sm rounded-full py-0 text-primary font-medium"
          >
            {ref.replace("#", "").charAt(0).toUpperCase() +
              ref.replace("#", "").slice(1)}
          </Button>
        </a>
      ))}
    </div>
  );
}
