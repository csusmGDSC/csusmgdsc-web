import React from "react";

const badgeStyles = [
  "bg-blue/10 text-blue/80 dark:bg-gray-700 dark:text-blue border border-blue",
  "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
  "bg-red/10 text-red/80 dark:bg-gray-700 dark:text-red border border-red",
  "bg-green/10 text-green/80 dark:bg-gray-700 dark:text-green/40 border border-green/40",
  "bg-yellow/10 text-[#f59e0b] dark:bg-gray-700 dark:text-yellow border border-yellow",
  "bg-indigo-100 text-indigo-800 dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
  "bg-purple-100 text-purple-800 dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
  "bg-pink-100 text-pink-800 dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
];

const getRandomBadgeStyle = () => {
  return badgeStyles[Math.floor(Math.random() * badgeStyles.length)];
};

const RandomBadge: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const randomStyle = getRandomBadgeStyle();
  return <span className={`${randomStyle} ${className}`}>{text}</span>;
};

export default RandomBadge;
