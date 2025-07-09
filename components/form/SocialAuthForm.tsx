"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      console.log("signing in with", provider);
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
      });
    } catch (error) {
      toast("Sign-in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
        style: {
          backgroundColor: "#f8d7da",
          color: "#721c24",
          border: "1px solid #f5c6cb",
        },
      });
      console.error(error);
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          width={20}
          height={20}
          alt="github"
          className="invert-colors mr-2.5 object-contain"
        />
        <span className="">Log in with Github</span>
      </Button>

      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          width={20}
          height={20}
          alt="google"
          className="mr-2.5 object-contain"
        />
        <span className="">Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
