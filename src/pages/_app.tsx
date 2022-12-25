import { Analytics } from "@vercel/analytics/react";
import { Flowbite } from "flowbite-react";
import type { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import "../common/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Flowbite>
        <Component {...pageProps} />
        <Analytics />{" "}
      </Flowbite>
    </SessionProvider>
  );
};

export default MyApp;
