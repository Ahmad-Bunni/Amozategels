import { useState } from "react";
import Modal from "../../common/modal";
import WorkImages from "./work-images";

function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleImageClick(image: string) {
    setSelectedImage(image);
    setIsModalOpen(true);
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="p-24 h-full bg-gray-50 opacity-80 rounded-lg w-full">
      <div className="flex flex-wrap gap-16 justify-center items-center">
        {WorkImages.map((image, index) => (
          <div key={index} className="cursor-pointer">
            <img
              key={index}
              src={image.src}
              alt={`Work image ${index + 1}`}
              className="h-80 w-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => handleImageClick(image.src)}
            />
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        image={selectedImage || ""}
        onClose={handleModalClose}
      />
    </div>
  );
}

export default Services;
