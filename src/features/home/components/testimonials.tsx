import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionTitle } from "@/features/base";

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <SectionTitle
        title="Testimonials"
        subtitle="Don't just take our word for it, see how GDSC has impacted our students"
      />

      <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
        <Card className="grid grid-rows-[auto_1fr] sm:col-span-2 md:col-span-4 lg:col-span-2 sm:p-6 lg:row-span-2">
          <CardHeader>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-3 0 262 262"
              preserveAspectRatio="xMidYMid"
              className="h-12 mr-auto"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
          </CardHeader>
          <CardContent>
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                GDSC is the most effective catalyst for software engineering success at CSUSM.
                We've built GDSC to bring real industry standards to the academic setting.
                Through open source projects that have real impact, interview preperation and career readiness mentorship,
                and conference attendance!
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarFallback>GO</AvatarFallback>
                </Avatar>

                <div>
                  <cite className="text-sm font-medium">
                    Gabriel Tellez Ornelas
                  </cite>
                  <span className="text-muted-foreground block text-sm">
                    Software Engineer at Google
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                GDSC has been highly impactful in my growth, allowing me to
                propagate my knowledge as a lead. This organization has opened
                up avenues in industry opportunities.
              </p>

              <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/jonathan.webp"
                    alt="Jonathan Yombo"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">Jaedon Spurlock</cite>
                  <span className="text-muted-foreground block text-sm">
                    Software Engineer at Lockheed Martin
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                Being a part of GDSC has been an invaluable experience. It has
                taught me a lot frontend development.
              </p>

              <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/yucel.webp"
                    alt="Yucel Faruksahan"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">Joshua Lara</cite>
                  <span className="text-muted-foreground block text-sm">
                    Software Engineer
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
        <Card className="col-span-1 md:col-span-2 lg:col-span-1">
          <CardContent className="h-full pt-6">
            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
              <p>
                Being part of GDSC gave me the opportunity to focus on skills I
                was excited to develop, especially in back-end development.
              </p>

              <div className="grid grid-cols-[auto_1fr] gap-3">
                <Avatar className="size-12">
                  <AvatarImage
                    src="https://tailus.io/images/reviews/rodrigo.webp"
                    alt="Rodrigo Aguilar"
                    height="400"
                    width="400"
                    loading="lazy"
                  />
                  <AvatarFallback>YF</AvatarFallback>
                </Avatar>
                <div>
                  <cite className="text-sm font-medium">Tariq Elamin</cite>
                  <span className="text-muted-foreground block text-sm">
                    Software Engineer
                  </span>
                </div>
              </div>
            </blockquote>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
