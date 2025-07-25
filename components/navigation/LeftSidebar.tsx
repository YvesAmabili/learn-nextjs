import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

import NavLinks from "./navbar/NavLinks";

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex h-full flex-col gap-6 mb-8">
        <NavLinks />
      </div>

      <div className="flex flex-col gap-3">
        <Link href={ROUTES.SIGN_IN}>
          <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
            <Image
              src="/icons/account.svg"
              alt="user"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient hidden lg:block">
              Log in
            </span>
          </Button>
        </Link>
        <Link href={ROUTES.SIGN_UP}>
          <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 w-full rounded-lg border px-4 py-3 shadow-none min-h-[41px]">
            <Image
              src="/icons/sign-up.svg"
              alt="user"
              width={20}
              height={20}
              className="invert-colors lg:hidden"
            />
            <span className="hidden lg:block">Sign up</span>
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default LeftSidebar;
