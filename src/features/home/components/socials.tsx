import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import socialIcons from "@/components/ui/social-icons";
import { socialsList } from "@/config/data";

export default function Socials() {
  return (
    <section id="socials">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Socials</h2>
        <p className="text-xl text-gray-600">
          Follow us on our social media platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {socialsList.map((item) => (
          <Card>
            <CardContent className="mt-4 space-y-2">
              <span className="text-blue text-4xl">
                {socialIcons[item.social as keyof typeof socialIcons]}
              </span>
              <p className="text-primary text-lg">
                {item.social.charAt(0).toUpperCase() + item.social.slice(1)}
              </p>
            </CardContent>

            <CardFooter>
              <a href={item.link} target="_blank">
                <Button variant="outline">Learn more</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
