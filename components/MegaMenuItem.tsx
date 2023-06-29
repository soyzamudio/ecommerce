import Link from "next/link";
import { MegaMenuItem } from "@lib/interfaces";

const MegaMenuItem = ({ title, description, href }: MegaMenuItem) => {
  return (
    <Link
      href={href || "/"}
      className="font-semibold block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 hover:text-primary-900"
    >
      {title}
      {description && (
        <p className="text-gray-500 font-normal text-xs">{description}</p>
      )}
    </Link>
  );
};

export default MegaMenuItem;
