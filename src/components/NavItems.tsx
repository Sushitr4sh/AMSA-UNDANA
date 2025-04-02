"use client";

import { motion } from "framer-motion";
import { navigations } from "@/config";
import NavItem from "./NavItem";

const navVariants = {
  hidden: { opacity: 0, y: 20 }, // Start slightly below
  visible: (i: number) => ({
    opacity: 1,
    y: 0, // Move into place
    transition: {
      delay: 1 + i * 0.1, // 1.5s delay before stagger starts
      type: "spring",
      stiffness: 120,
      damping: 10,
    },
  }),
};

const NavItems = () => {
  return (
    <nav className="flex items-center space-x-12">
      {navigations.map((nav, i) => (
        <motion.div
          key={nav}
          custom={i} // Pass index for stagger effect
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <NavItem text={nav} />
        </motion.div>
      ))}
    </nav>
  );
};

export default NavItems;
