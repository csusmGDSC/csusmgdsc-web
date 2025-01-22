"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaGoogle, FaGithub } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AnimatedShapes } from "./animated-shapes";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-4xl overflow-hidden border-0 shadow-transparent rounded-none">
        <div className="flex flex-col md:flex-row">
          {/* Left side: Animated shapes */}
          <div className="relative flex-1">
            <AnimatedShapes />
          </div>

          {/* Right side: Auth form */}
          <div className="flex-1 p-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Welcome Back!
              </CardTitle>
              <CardDescription className="font-mono text-blue">
                Sign in to your GDSC account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="johndoe@example.com"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-blue"
                    // TODO: Add route for regular sign-in or sign-up
                  >
                    Sign In
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <hr className="flex-1" />
                <span className="text-sm text-gray-500">or continue with</span>
                <hr className="flex-1" />
              </div>
              <div className="flex justify-center space-x-4">
                <SocialButton icon="google" />
                <SocialButton icon="github" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">New to GDSC?</span>
                <Link to={"/sign-up"}>
                  <Button variant="link" className="text-blue">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

function SocialButton({ icon }: { icon: "google" | "github" }) {
  const iconMap = {
    google: <FaGoogle className="h-5 w-5" />,
    github: <FaGithub className="h-5 w-5" />,
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full transition-transform hover:scale-110"
      // TODO: Add route for social button click
      onClick={() => {
        if (icon === "google") {
          // Add Google sign-in route
        } else if (icon === "github") {
          // Add GitHub sign-in route
        }
      }}
    >
      {iconMap[icon]}
    </Button>
  );
}
export default SignIn;
