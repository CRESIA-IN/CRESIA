import { motion } from "framer-motion";
import { Target, Layers, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "../animations/variants";

export default function Philosophy() {
  const points = [
    {
      icon: <Target size={24} />,
      title: "Strategy First",
      desc: "We don't write a line of code until we understand your 5-year vision. Every pixel serves a business purpose.",
    },
    {
      icon: <Layers size={24} />,
      title: "Modular Systems",
      desc: "Stop rebuilding every two years. Our stacks are built to scale with you, allowing new features to snap in easily.",
    },
    {
      icon: <Zap size={24} />,
      title: "Automation Native",
      desc: "A pretty website that doesn't talk to your CRM is a liability. We connect your frontend to your operations.",
    },
  ];

  return (
    // ⬅️ PHILOSOPHY JSX EXACTLY AS PROVIDED
  );
}
