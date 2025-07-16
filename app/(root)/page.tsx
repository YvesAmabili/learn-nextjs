import Link from "next/link";
import React from "react";

import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions = [
  {
    _id: "1",
    title: "How to create a new project?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
    },
    upvotes: 10,
    views: 100,
    answers: [],
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn React?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "2", name: "react" },
    ],
    author: { _id: "1", name: "John Doe" },
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: { searchParams: SearchParams }) => {
  const { query = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(query.toLowerCase())
  );

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
      HomeFilter
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => {
          return <h1 key={question._id}>{question.title}</h1>;
        })}
      </div>
    </>
  );
};

export default Home;
