import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Velmure Tech handles information you share with us.",
};

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="section bg-white">
        <div className="shell max-w-3xl">
          <p className="eyebrow bg-primary-dark/5 text-primary-dark">Legal</p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Privacy Policy
          </h1>
          <div className="mt-8 space-y-6 leading-relaxed text-slate-600">
            <p>
              This policy covers what happens to information you share with Velmure Tech
              through this website — the contact form and the WhatsApp links.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-ink">What we collect</h2>
              <p className="mt-2">
                When you submit the contact form, we receive the name, business name,
                email, optional phone number, package selection, and message you enter.
                This is delivered to our business inbox ({site.email}) via FormSubmit, a
                third-party form-relay service — we don&apos;t run our own server to store
                submissions. If you message us on WhatsApp, that conversation is handled
                directly through WhatsApp under WhatsApp&apos;s own privacy terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">How we use it</h2>
              <p className="mt-2">
                Solely to respond to your inquiry and, if you become a client, to deliver
                the project you&apos;ve engaged us for. We don&apos;t sell, rent, or share
                your information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">Cookies &amp; analytics</h2>
              <p className="mt-2">
                This site does not use advertising or tracking cookies. Standard hosting
                logs (such as IP address and browser type) may be recorded by our hosting
                provider for security and performance purposes.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about this policy or a request to have your information removed
                can be sent to{" "}
                <a href={`mailto:${site.email}`} className="text-secondary hover:underline">
                  {site.email}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
