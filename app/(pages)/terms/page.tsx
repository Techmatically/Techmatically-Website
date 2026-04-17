export const metadata = {
  title: "Terms of Service",
  description: "Read the Terms of Service for using our platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Title */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Last updated: April 17, 2026
          </p>
        </header>

        {/* Content */}
        <div className="space-y-10 leading-relaxed text-muted-foreground">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              1. Introduction
            </h2>
            <p>
              By accessing or using this website, you agree to be bound by these
              Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Use of Service
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in a way
              that does not violate any applicable laws or regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. Accounts
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your account
              and password and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, branding, and materials are owned by the company and may
              not be copied, reproduced, or distributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate access if you violate these
              Terms or engage in harmful behavior.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Limitation of Liability
            </h2>
            <p>
              We are not responsible for any indirect or incidental damages arising
              from the use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Contact
            </h2>
            <p>
              If you have any questions, contact us at{" "}
              <span className="font-medium text-foreground">
                support@yourdomain.com
              </span>
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}