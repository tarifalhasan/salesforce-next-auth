import { useSession } from "next-auth/react";


const AccessToken = () => {
  const { data: sessionData } = useSession();
 
  

  return (
    <div style={{ paddingTop: "8rem" }}>
      {
        sessionData.user.name && (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={sessionData?.user?.image}
            alt={`${sessionData?.user?.name} images`}

          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {sessionData?.user?.name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {sessionData?.user?.email}
          </span>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default AccessToken;
