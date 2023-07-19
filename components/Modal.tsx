"use client";

import { X } from "lucide-react";

const Modal = ({
  onClose,
  isOpen = "closed",
  children,
}: {
  onClose: any;
  isOpen: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-[999]"
      key="modal-container"
    >
      <div className="min-w-[650px]">
        <div className="relative bg-white h-full w-full rounded-sm p-4">
          <button
            className="absolute right-4 top-4 text-gray-500 hover:text-black"
            onClick={() => onClose()}
          >
            <X size={18} />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
