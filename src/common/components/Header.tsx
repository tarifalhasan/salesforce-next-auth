import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: sessionData } = useSession();

  if (sessionData) {
    return (
      <nav className="bg-white px-2 sm:px-4 py-5 dark:bg-gray-800 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <nav>
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-600">
                <h2>signin with {sessionData?.user?.email}</h2>
              </span>
            </a>
            <div>
              <button onClick={() => signOut()}>Signout</button>
            </div>
            <div className="flex md:order-2 gap-5"></div>
          </div>
        </nav>
      </nav>
    );
  } else {
    return <h1>You're Not Login</h1>;
  }
};

export default Header;
