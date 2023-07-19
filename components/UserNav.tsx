"use client";

import { User } from "lucide-react";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import Auth from "./Auth";

const UserNav = async () => {
  const [showModal, setShowModal] = useState("closed");

  useEffect(() => {
    if (showModal === "open") {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("w-screen");
      document.body.classList.add("h-screen");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.remove("w-screen");
      document.body.classList.remove("h-screen");
    }
  }, [showModal]);

  function handleCloseModal() {
    setShowModal("closed");
  }

  return (
    <>
      <button
        className="bg-white rounded-full p-2 shadow-sm"
        onClick={() => setShowModal("open")}
      >
        <User size={18} />
      </button>
      {showModal === "open" && (
        <Modal onClose={handleCloseModal} isOpen={showModal}>
          <Auth cb={handleCloseModal} />
        </Modal>
      )}
    </>
  );
};

export default UserNav;
