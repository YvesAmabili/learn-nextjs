import Link from "next/link";
import React from "react";

import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to create a new project?",
    tags: [{ _id: "1", name: "javascript" }],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn React Project?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "How to learn Next.js?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "next.js" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image: "https://github.com/shadcn.png",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchFilter = filter
      ? question.tags.some((tag) =>
          tag.name.toLowerCase().includes(filter.toLowerCase())
        )
      : true;
    return matchQuery && matchFilter;
  });

  return (
    <>
      <section className="w-full flex flex-col-reverse sm:flex-row justify-between sdm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        {" "}
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />{" "}
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => {
          return <QuestionCard key={question._id} question={question} />;
        })}
      </div>
    </>
  );
};

export default Home;
