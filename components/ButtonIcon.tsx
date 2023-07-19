import { ArrowRightIcon } from "lucide-react";

const ButtonIcon = ({
  rotation,
  bgColor,
  borderColor = "border-black",
}: {
  rotation: string;
  bgColor?: string;
  borderColor?: string;
}) => {
  return (
    <div
      className={`border ${borderColor} rounded-full p-2 ${bgColor} group-hover:border-sage`}
    >
      <ArrowRightIcon className={`rotate-[${rotation}deg]`} />
    </div>
  );
};

export default ButtonIcon;
