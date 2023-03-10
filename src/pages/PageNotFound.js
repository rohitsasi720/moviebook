import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <section className="flex flex-col px-2">
        <div>
          <span className="text-9xl font-bold text-gray-700 dark:text-white">
            404
          </span>
        </div>
        <div className="flex pt-4 justify-center">
          <Link
            to="/"
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-gray-600 transition duration-300 ease-out border-2 border-gray-700 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-600 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-blue-600 transition-all duration-300 transform group-hover:translate-x-full ease">
              Back to home
            </span>
            <span className="relative invisible">Back to home</span>
          </Link>
        </div>
      </section>
    </main>
  );
};
