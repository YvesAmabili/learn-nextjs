"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { formUrlQuery, removeKeyFromQuery } from "@/lib/url";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "React", value: "react" },
  { name: "Recommended", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
];

const HomeFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter") || "";
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (filterParam) {
      setActive(filterParam);
    }
  }, [filterParam]);

  const handleTypeClick = (filter: string) => {
    let newUrl = "";
    if (filter === active) {
      setActive("");
      newUrl = removeKeyFromQuery({
        params: searchParams.toString(),
        keyToRemove: ["filter"],
      });
    } else {
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLocaleLowerCase(),
      });
    }
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="mt-10 hidden flex-wrap gap-3 sm:flex">
      {filters.map((filter) => (
        <Button
          onClick={() => handleTypeClick(filter.value)}
          className={cn(
            `body-medium rounded-lg px-6 py-3 capitalize shadow-none`,
            active === filter.value
              ? "bg-primary-500 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500 dark:hover:bg-dark-400"
              : "bg-light-800 text-light-500 hover:bg-light-800 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-300"
          )}
          key={filter?.value}
        >
          {filter?.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilter;
