import { useState } from "react";
import Modal from "../../common/modal";
import SEOHelmet from "../../common/SEOHelmet";
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
    <>
      <SEOHelmet
        title="Our Work - Professional Tile Installation Portfolio | Amoza Tegels"
        description="View our portfolio of professional tile installation projects. High-quality bathroom, kitchen, and floor tile installations showcasing precision craftsmanship in Netherlands."
        keywords="tile installation portfolio, bathroom tiles Netherlands, kitchen tiles, floor tiles, ceramic tiles, porcelain tiles, tile work gallery, professional tiling examples"
        canonicalUrl="https://amoza-tegels.nl/services"
      />

      <div className="p-16 h-full bg-gray-50 opacity-80 rounded-lg w-full overflow-y-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-800 mb-4">
            Our Professional Work
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Explore our portfolio of precision tile installations. Each project
            showcases our commitment to quality craftsmanship and attention to
            detail.
          </p>
        </header>

        <div
          className="flex flex-wrap gap-16 justify-center items-center mb-8"
          role="img"
          aria-label="Tile installation portfolio gallery"
        >
          {WorkImages.map((image, index) => (
            <div key={index} className="cursor-pointer">
              <img
                key={index}
                src={image.src}
                alt={`Professional tile installation project ${
                  index + 1
                } - Amoza Tegels work example`}
                className="h-80 w-64 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow"
                onClick={() => handleImageClick(image.src)}
                loading="lazy"
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
    </>
  );
}

export default Services;
