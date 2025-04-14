import { Separator } from "@/components/ui/separator";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

export const ProjectBackend = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-4">
      <Terminal>
        <TypingAnimation>&gt; go run main.go</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-green">
          <span>✔ Loaded environment variables from .env</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green">
          <span>✔ Connected to PostgreSQL @ localhost:5432</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green">
          <span>✔ Migrated database schema (5 tables)</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green">
          <span>✔ Initialized Echo HTTP server</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green">
          <span>✔ Registered 14 routes</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-blue">
          <span>ℹ Server listening on :</span>
          <span className="pl-2">http://localhost:8080</span>
        </AnimatedSpan>

        <TypingAnimation delay={4500} className="text-muted-foreground">
          Server running in development mode 🚀
        </TypingAnimation>
      </Terminal>

      <div className="space-y-4 md:w-1/2">
        <div>
          <h1 className="text-lg font-bold">Backend</h1>
          <p className="text-blue">
            Reliable and secure server-side programming
          </p>
        </div>

        <Separator />

        <ul className="[&>li]:list-disc [&>li]:ml-4 space-y-4">
          <li>Creating REST APIs with Golang and Echo Framework</li>
          <li>Integrating OAuth and JWT authentication</li>
          <li>Leverage authentication middleware</li>
        </ul>
      </div>
    </div>
  );
};
