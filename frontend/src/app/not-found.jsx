"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center h-screen text-lg">
          <h1>Something went wrong!</h1>
          <Link
            href="/"
            className="mt-3 px-4 py-1 border-2 border-slate-500 rounded-md  text-lg  transition-all ease-in-out duration-150 hover:bg-slate-900 hover:text-white "
          >
            Go Back
          </Link>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
