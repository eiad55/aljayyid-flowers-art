import { CONTACT_INFO } from "@/constants/data";
import { IconWhatsapp } from "@/components/icons/Icons";

export function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 left-7 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none wa-pulse"
      style={{
        backgroundColor: "#25D366",
        boxShadow:       "0 6px 24px rgba(37,211,102,0.38)",
      }}
      aria-label="تواصل معنا عبر واتساب"
      title="تواصل عبر واتساب"
    >
      <IconWhatsapp size={26} color="white" />
    </a>
  );
}
