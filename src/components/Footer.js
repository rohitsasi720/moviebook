import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <span
        className="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        style={{ textAlign: "center" }}
      >
        © 2023{" "}
        <Link to="/" className="hover:underline">
          MovieBook
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};


