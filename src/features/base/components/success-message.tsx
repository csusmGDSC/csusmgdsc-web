"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const successVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "backIn",
      duration: 0.6,
    },
  },
};

const SuccessMessage = ({
  url,
  urlText,
  successMessage,
}: {
  url: string;
  urlText: string;
  successMessage: string;
}) => {
  return (
    <motion.section
      className="w-full h-full flex flex-col items-center justify-center gap-4 md:gap-2 text-center relative"
      variants={successVariants}
      initial="hidden"
      animate="visible"
    >
      <Link
        to="/"
        className="absolute top-0 left-0 flex gap-2 text-sm text-priamry hover:underline"
      >
        <ChevronLeft size={20} /> Back to Home
      </Link>
      <img
        src="/images/club/logo-title-light.png"
        width="600"
        height="600"
        alt="Success Icon"
        className="md:mb-4"
      />
      <h4 className="text-2xl font-semibold text-primary md:text-3xl">
        Success!
      </h4>
      <p className="text-sm max-w-md text-primary/80 md:text-base">
        {successMessage}
      </p>
      <div className="flex items-center mt-6">
        <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
          <Link to={url}>
            <Button className="relative bg-blue border group border-border hover:bg-blue/70 rounded-md text-white hover:text-white">
              <FaArrowRight className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              {urlText}
            </Button>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessMessage;
