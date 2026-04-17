export const metadata = {
  title: "Privacy Policy",
  description: "Read our Privacy Policy to understand how we handle your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
              We value your privacy and are committed to protecting your personal
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, email address,
              and usage data when you interact with our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We use your information to provide and improve our services, respond to
              inquiries, and enhance user experience.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              4. Cookies
            </h2>
            <p>
              We may use cookies to improve website functionality and analyze user
              behavior. You can disable cookies in your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              5. Data Sharing
            </h2>
            <p>
              We do not sell your personal data. We may share information only with
              trusted third-party services necessary for operating our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              6. Data Security
            </h2>
            <p>
              We implement security measures to protect your data, but no system is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              7. Your Rights
            </h2>
            <p>
              You may request access, updates, or deletion of your personal data by
              contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              8. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, contact us at{" "}
              <span className="font-medium text-foreground">
                support@yourdomain.com
              </span>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}