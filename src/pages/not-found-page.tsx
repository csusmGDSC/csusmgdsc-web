import { Button } from "@/components/ui/button";
import { PageContent } from "@/features/base";
import { Link } from "react-router-dom";

// Theme management
import { useTheme } from "@/lib/providers";

export default function NotFoundPage() {
  const ReactComponent = () => {
    const { theme } = useTheme();
    return (
      <main>
        <PageContent className="items-center">
          <img
            src={
              theme == "light"
                ? "/images/stock/stock-9.jpeg"
                : "/images/stock/stock-9-dark.jpeg"
            }
            alt="404"
            className="w-[500px]"
          />
          <p>Uh oh! The page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="outline" className="w-fit px-10">
              Go Home
            </Button>
          </Link>
        </PageContent>
      </main>
    );
  };
}
