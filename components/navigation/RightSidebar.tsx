import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  { _id: "1", title: "How do I use Next.js?" },
  { _id: "2", title: "How do I use React?" },
  { _id: "3", title: "How do I use Tailwind CSS?" },
  { _id: "4", title: "How do I use TypeScript?" },
  { _id: "5", title: "How do I use Node.js?" },
];

const popularTags = [
  { _id: "1", name: "Next.js", questions: 10 },
  { _id: "2", name: "React", questions: 10 },
  { _id: "3", name: "Tailwind CSS", questions: 10 },
  { _id: "4", name: "JavaScript", questions: 10 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
      <div className="mt-7 flex w-full flex-col gap-[30px]">
        {hotQuestions.map(({ _id, title }) => (
          <Link
            href={ROUTES.PROFILE(_id)}
            key={_id}
            className="flex justify-between items-center gap-7"
          >
            <p className="body-medium text-dark500_light700">{title}</p>
            <Image
              src="/icons/chevron-right.svg"
              alt="chevron-right"
              width={20}
              height={20}
              className="invert-colors"
            />
          </Link>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
