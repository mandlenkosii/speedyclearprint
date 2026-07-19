import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phone = "27680182295";

  const message = encodeURIComponent(
    "Hi Speedyclearprint, I'd like to request a printing quote."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;