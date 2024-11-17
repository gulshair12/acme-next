import Image from "next/image";
import Link from "next/link";
import React from "react";
import { auth, signOut, signIn } from "@/app/auth";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();

  return (
    <>
      <header className="bg-white px-5 py-3 shadow-md font-work-sans ">
        <nav className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.svg" alt="logo" width={144} height={30} />
          </Link>

          <div className="flex items-center gap-5 text-black">
            {session && session?.user ? (
              <>
                <Link href="/startup/create">
                  <span>Create</span>
                </Link>

                <form
                  action={async () => {
                    "use server";
                    await signOut({ callbackUrl: "/" });
                  }}
                >
                  <Button type="submit" className="bg-primary">Logout</Button>
                </form>

                <Link href={`user/${session?.id}`}>
                  <span>{session?.user?.name}</span>
                </Link>
              </>
            ) : (
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <Button
                  type="submit"
                >
                  <span>Login with GitHub</span>
                </Button>
              </form>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
