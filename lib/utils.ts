import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants/techMap";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDevIconClassName = (techName: string) => {
  const normalizedTechName = techName
    .toLowerCase()
    .replace(/[ .]/g, "")
    .toLowerCase();
  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};

export const getTimeStamp = (date: Date) => {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (isNaN(diffInSeconds)) return "Invalid date";

  const intervals: [number, string][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [7, "day"],
    [4.34524, "week"],
    [12, "month"],
    [Number.POSITIVE_INFINITY, "year"],
  ];

  let value = diffInSeconds;
  let unit = "second";

  for (const [threshold, nextUnit] of intervals) {
    if (value < threshold) break;
    value = value / threshold;
    unit = nextUnit;
  }

  const rounded = Math.floor(value);
  return `${rounded} ${unit}${rounded !== 1 ? "s" : ""} ago`;
};
