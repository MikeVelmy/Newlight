import { waLink } from "@/lib/site";
import { IconWhatsApp } from "@/components/ui/icons";

/**
 * Thumb-reachable persistent WhatsApp action for mobile — the primary
 * conversion path. Hidden on large screens where the nav CTA covers it.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href={waLink("Hello Velmure Tech — I'd like to start a project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Velmure Tech on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-slate-950 shadow-[0_10px_30px_-6px_rgb(34_211_238_/0.6)] transition-transform duration-300 hover:scale-105 active:scale-95 lg:hidden"
      style={{ marginBottom: "env(safe-area-inset-bottom)" }}
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
