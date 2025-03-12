import React from "react";

const Input = ({ id, name, value, onChange, error, type, placeholder }) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 md:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
      />
      {error && (
        <p className="text-red-400 text-xs absolute top-full m-0">{error}</p>
      )}
    </div>
  );
};

export default Input;
