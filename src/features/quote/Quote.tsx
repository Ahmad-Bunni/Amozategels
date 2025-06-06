import SEOHelmet from "../../common/SEOHelmet";

function Quote() {
  return (
    <>
      <SEOHelmet
        title="Get a Quote - Contact Amoza Tegels for Professional Tile Installation"
        description="Contact Amoza Tegels for a free quote on professional tile installation services in Netherlands. Available daily 10:00 AM - 10:00 PM. Call +31610221441 or WhatsApp us."
        keywords="tile installation quote, contact tile contractor, free estimate Netherlands, bathroom tile quote, kitchen tile installation cost, professional tiling quote"
        canonicalUrl="https://amoza-tegels.nl/quote"
      />

      <div className="flex flex-col px-8 pb-36 pt-8 h-full bg-gray-50 opacity-90 rounded-lg w-full overflow-y-auto">
        {/* Main Content Card */}
        <div className="flex flex-col justify-center mx-auto">
          <header className="text-center space-y-2 mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-800">
              Get Your Free Quote
            </h1>

            <p className="text-gray-700 text-lg">
              Ready to transform your space with professional tile installation?
              Contact us today for a personalized quote.
            </p>
          </header>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Phone Contact */}
            <div className="border border-gray-200 bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-cyan-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Call Us
              </h2>
              <p className="text-gray-600 mb-4">Speak directly with our team</p>
              <a
                href="tel:+31610221441"
                className="inline-block bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-300"
                aria-label="Call Amoza Tegels at +31610221441"
              >
                0610221441
              </a>
            </div>

            {/* WhatsApp Contact */}
            <div className="border border-gray-200 bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                WhatsApp
              </h2>
              <p className="text-gray-600 mb-4">
                Quick and convenient messaging
              </p>
              <a
                href="https://wa.me/+31610221441"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                aria-label="Send WhatsApp message to Amoza Tegels"
              >
                Message Us
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="bg-cyan-50 rounded-xl p-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-100 rounded-full mb-4">
              <svg
                className="w-6 h-6 text-cyan-600"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Business Hours
            </h2>
            <p className="text-gray-600 text-lg">
              Available daily from{" "}
              <span className="font-semibold text-cyan-700">
                10:00 AM - 10:00 PM
              </span>
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Our team is ready to discuss your project requirements and provide
              you with a detailed, competitive quote.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quote;
