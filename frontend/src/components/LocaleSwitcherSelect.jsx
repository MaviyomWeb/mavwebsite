"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

// From here i have to check

const LocaleSwitcher = ({ children, defaultValue, label }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      // Split the pathname and update the locale segment
      const segments = pathname.split("/");
      segments[1] = nextLocale; // Assuming the locale is always the second segment
      const newPathname = segments.join("/");

      router.replace(newPathname);
    });
  }

  return (
    <label
      className={`border border-gray-400 rounded-full max-w-max ${
        isPending && "transition-opacity [&:disabled]:opacity-30"
      }`}
    >
      <p className="sr-only">{label}</p>

      <select
        className="bg-transparent px-4 py-3   outline-none"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
};

export default LocaleSwitcher;
