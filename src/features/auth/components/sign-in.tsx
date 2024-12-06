"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => setIsLogin(!isLogin);

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
                {isLogin ? "Welcome Back!" : "Join the Club!"}
              </CardTitle>
              <CardDescription className="font-mono text-blue">
                {isLogin
                  ? "Sign in to your GDSC account"
                  : "Create your GDSC account"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue"
                      />
                    </div>
                  )}
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
                    {isLogin ? "Sign In" : "Sign Up"}
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
                <span className="text-sm">
                  {isLogin ? "New to GDSC?" : "Already have an account?"}
                </span>
                <Button
                  variant="link"
                  onClick={toggleAuth}
                  className="text-blue"
                >
                  {isLogin ? "Sign Up" : "Sign In"}
                </Button>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
};

function AnimatedShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute h-40 w-40 rounded-full bg-blue opacity-50
        0"
        animate={{
          x: ["-20%", "120%"],
          y: ["-20%", "120%"],
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute h-32 w-32 rounded-lg bg-red opacity-50"
        animate={{
          x: ["100%", "-10%"],
          y: ["10%", "90%"],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute h-48 w-48 rounded-full bg-yellow opacity-50"
        animate={{
          x: ["80%", "-20%"],
          y: ["80%", "-20%"],
          scale: [1, 1.3, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute h-36 w-36 rounded-lg bg-green opacity-50"
        animate={{
          x: ["-10%", "110%"],
          y: ["110%", "-10%"],
          scale: [1, 1.2, 1],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  );
}

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
