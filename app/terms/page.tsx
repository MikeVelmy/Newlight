import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The basic terms that apply when you engage Velmure Tech for a website project.",
};

export default function TermsPage() {
  return (
    <main id="main">
      <section className="section bg-white">
        <div className="shell max-w-3xl">
          <p className="eyebrow bg-primary-dark/5 text-primary-dark">Legal</p>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Terms of Service
          </h1>
          <div className="mt-8 space-y-6 leading-relaxed text-slate-600">
            <p>
              These are the general terms that apply when you engage Velmure Tech to build
              or maintain a website. Specific scope, timeline, and cost for your project are
              agreed directly with you before work begins — nothing here overrides what we
              agree on individually.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-ink">Engagement</h2>
              <p className="mt-2">
                Project scope (page count, features, package tier) is confirmed with you
                over WhatsApp or the contact form before we start building. Work begins once
                we&apos;ve received the content and photos needed for your site.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">Delivery guarantee</h2>
              <p className="mt-2">
                If your site isn&apos;t live within 10 business days of us receiving your
                content and photos, you receive a discount on the final invoice — no
                arguments. This guarantee is measured from the point we have everything
                needed to build, not from the date of initial contact.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">Content ownership</h2>
              <p className="mt-2">
                You retain ownership of the content, photos, and branding you provide.
                Once a project is paid in full, you own the finished website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">Ongoing support</h2>
              <p className="mt-2">
                Post-launch support is included as specified in your package, or available
                separately through the optional Monthly Care add-on.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-ink">Contact</h2>
              <p className="mt-2">
                Questions about these terms can be sent to{" "}
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
