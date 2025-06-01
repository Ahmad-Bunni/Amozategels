import { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  image: string;
  onClose: () => void;
}

function Modal({ isOpen, image, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle ESC key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Lock body scroll
      document.body.style.overflow = "hidden";

      // Focus the modal for accessibility
      if (modalRef.current) {
        modalRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      // Restore body scroll
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  // Don't render if not open
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
        onClick={handleBackdropClick}
      />

      <div className="flex items-center justify-center min-h-screen px-4 py-8">
        <div
          ref={modalRef}
          className="relative max-w-4xl w-full focus:outline-none"
          tabIndex={-1}
        >
          <img
            src={image}
            className="max-h-[85vh] object-contain"
            alt="Enlarged view"
            id="modal-title"
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
