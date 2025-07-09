import React from "react";

import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <span className="text-4xl font-space-grotesk font-bold mt-2 inline-block">
        DevOverflow
      </span>
      {session && (
        <form
          className="px-10 pt-[100px]"
          action={async () => {
            "use server";
            await signOut({
              redirectTo: ROUTES.SIGN_IN,
            });
          }}
        >
          <Button type="submit">Logout</Button>
        </form>
      )}
    </div>
  );
};

export default Home;
