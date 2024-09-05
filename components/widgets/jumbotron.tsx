import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { AudioLines, AudioWaveform, MicVocal } from "lucide-react";
import { Button } from "../ui/button";

export const JumbotronHomeWidget = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-pink-600 to-purple-600">
          Voice AI for developers
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Voice AI memungkinkan developer membangun, menguji, dan menerapkan agen suara
          dalam hitungan menit!
        </p>
        <div className="flex flex-col my-20 items-center">
          <div className="bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600  mb-10 rounded-full p-8">
            <MicVocal size={80} color="white" className="animate-pulse duration-2000" />
          </div>
          <Button
            variant="outline"
            className="leading-snug text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
          >
            Cobalah!
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-y-0">
          <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Coba Gratis
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href="#"
            className="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-70"
          >
            Pelajari
          </a>
        </div>
      </div>
    </section>
  );
};
