// Modal.js
import React, { useEffect, useRef } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Modal = ({ isOpen, closeModal, children }) => {
  const modalRef = useRef();

  function checkClickOutside(e) {
    if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", checkClickOutside);
    return () => document.removeEventListener("mousedown", checkClickOutside);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div ref={modalRef} className="bg-white p-8 rounded-lg relative">
              <button
                className="absolute top-2 right-2 font-bold"
                onClick={closeModal}
              >
                <IoMdCloseCircleOutline size={28} />
              </button>
              {children}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
