import Link from "next/link";
import ButtonIcon from "./ButtonIcon";

const Button = ({
  label,
  href,
  rotation,
}: {
  label: string;
  href: string;
  rotation?: number;
}) => {
  return (
    <Link
      href={href}
      className="font-semibold flex gap-x-4 items-center hover:text-sage group"
    >
      <div>{label}</div>
      <ButtonIcon rotation={`${rotation}`} />
    </Link>
  );
};

export default Button;
