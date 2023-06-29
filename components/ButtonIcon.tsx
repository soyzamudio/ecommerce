import { ArrowRightIcon } from "lucide-react";

const ButtonIcon = ({
  rotation,
  bgColor,
}: {
  rotation: string;
  bgColor?: string;
}) => {
  return (
    <div
      className={`border border-black rounded-full p-2 ${bgColor} group-hover:border-sage`}
    >
      <ArrowRightIcon className={`rotate-[${rotation}deg]`} />
    </div>
  );
};

export default ButtonIcon;
