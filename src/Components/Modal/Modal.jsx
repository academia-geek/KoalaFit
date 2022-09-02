import React from "react";
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="fixed left-0 top-10 flex items-center justify-center z-10 bg-[rgba(32,35,41,.8)]">
      {children}
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;