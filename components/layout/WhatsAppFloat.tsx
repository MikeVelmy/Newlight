import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/icons";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Hi Velmure Tech, I'd like to talk about a new website.")}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Chat with Velmure Tech on WhatsApp"
    >
      <span className="wa-pulse" aria-hidden="true" />
      <span className="wa-glow relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
