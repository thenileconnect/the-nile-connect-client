import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div className={cn("relative p-[8px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute mx-auto inset-0 my-auto max-w-2xl h-[28rem] z-[1] rounded-[30rem] opacity-25 group-hover:opacity-35 blur-2xl transition duration-700 will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#D4FD8D,transparent),radial-gradient(circle_farthest-side_at_100%_0,#9EFD50,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#B9FD50,transparent),radial-gradient(circle_farthest-side_at_0_0,#CCFD7A,#7FD428)]"
        )}
      />

      <div className={cn("relative z-10 p-4", className)}>
        {children}
      </div>
    </div>
  );
};
