"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { FaCircle, FaSwatchbook, FaPen, FaStar } from "react-icons/fa";

const serviceLinks = [
  {
    icon: <FaCircle />,
    title: "UI UX Design",
    href: "",
    image: "/assets/img-1.png",
  },
  {
    icon: <FaSwatchbook />,
    title: "Graphic Design",
    href: "",
    image: "/assets/img-2.png",
  },
  {
    icon: <FaPen />,
    title: "Brand Design",
    href: "",
    image: "/assets/img-3.png",
  },
  {
    icon: <FaStar />,
    title: "Web Development",
    href: "",
    image: "/assets/img-4.png",
  },
];

// variants
const textBlur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  show: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.4 },
  },
  hide: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

const imageVariants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
  hide: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

const ServiceLinks = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  console.log(activeIndex);

  return (
    <div className="flex flex-col gap-8">
      {serviceLinks.map((service, index) => {
        return (
          <Link
            href={service.href}
            key={index}
            className={`border-b border-white/20 pb-8 ${
              index === 0 ? "border-t pt-8" : ""
            }`}
            onMouseOver={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="relative">
              {" "}
              <motion.div
                className="flex items-center gap-4 w-full"
                variants={textBlur}
                initial="initial"
                animate={
                  activeIndex !== null && activeIndex !== index
                    ? "show"
                    : "hide"
                }
              >
                <div className="text-sm">{service.icon}</div>
                <div className="text-2xl uppercase">{service.title}</div>
              </motion.div>
              {/* img */}
              <motion.div
                variants={imageVariants}
                initial="initial"
                animate={activeIndex === index ? "show" : "hide"}
                className="absolute -top-48 right-0 xl:right-32"
              >
                <Image
                  src={service.image}
                  width={245}
                  height={247}
                  alt={service.title}
                  quality={100}
                />
              </motion.div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ServiceLinks;
