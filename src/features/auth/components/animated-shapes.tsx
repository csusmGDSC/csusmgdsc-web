import { motion } from "framer-motion";

export function AnimatedShapes() {
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
        className="absolute h-32 w-32 rounded-sm bg-red opacity-50"
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
        className="absolute h-36 w-36 rounded-sm bg-green opacity-50"
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
