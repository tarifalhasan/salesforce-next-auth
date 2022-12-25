import type { NextPage } from "next";
import Head from "next/head";

import { CtxOrReq } from "next-auth/client/_utils";
import { getSession } from "next-auth/react";
import Header from "../common/components/Header";
import AccessToken from "./../common/components/AccessToken";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Salesforce NextAuth Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <AccessToken />
    </>
  );
};

export const getServerSideProps = async (ctx: CtxOrReq | undefined) => {
  const session = await getSession(ctx);
  /**
   * If session is available then redirect to main page.
   */
  if (!session) {
    return {
      redirect: { destination: "/signin", permanent: false },
    };
  }

  /**
   * Return providers and CSRF Token
   */
  return {
    props: { session },
  };
};

export default Home;
