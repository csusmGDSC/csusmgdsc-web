"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
                  <Button type="submit" className="w-full bg-blue">
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
    google: (
      <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
        />
      </svg>
    ),
    github: (
      <svg className="h-5 w-5" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
        />
      </svg>
    ),
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="h-10 w-10 rounded-full transition-transform hover:scale-110"
    >
      {iconMap[icon]}
    </Button>
  );
}
export default SignIn;
