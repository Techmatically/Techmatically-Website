'use client'

import { useState } from "react"; // Added
import Container from "../../../components/common/container";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

export default function ContactPage() {
  // 1. State for form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "", // Not required in HTML, handled as optional in route
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // 2. Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 3. Submit to /api/contact (or wherever your route.ts is)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", { // Ensure path matches your route.ts location
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", company: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-stretch">
            {/* LEFT SIDE - CONTACT INFO CARD (Unchanged) */}
            <div className="rounded-2xl bg-gradient-to-b from-blue-500 to-blue-200 p-10 text-white shadow-xl">
              <h2 className="text-2xl font-semibold mb-8">Get in touch</h2>
              <div className="mb-6">

                <h3 className="font-semibold mb-1">Visit us</h3>

                <p className="text-sm opacity-90 leading-relaxed">

                  Suite# 106-108 <br />

                  Sumya Business Avenue M.A.C.H.S<br />

                  Karachi, Pakistan

                </p>

              </div>



              {/* Chat */}

              <div className="mb-6">

                <h3 className="font-semibold mb-1">Chat to us</h3>

                <p className="text-sm opacity-90">

                  Our friendly team is here to help.<br />

                  techmati@techmatically.com

                </p>

              </div>



              {/* Call */}

              <div className="mb-6">

                <h3 className="font-semibold mb-1">Call us</h3>

                <p className="text-sm opacity-90">

                  Mon–Fri from 8am to 5pm<br />

                  (+92) 321-3166393

                </p>

              </div>



              {/* Social */}

              <div>

                <h3 className="font-semibold mb-3">Social media</h3>



                <div className="flex gap-3 text-white/90">

                  <a

                    href="https://facebook.com"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"

                  >

                    <FaFacebookF size={14} />

                  </a>



                  <a

                    href="https://www.linkedin.com/company/techmatically/"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"

                  >

                    <FaLinkedinIn size={14} />

                  </a>



                  <a

                    href="https://twitter.com"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"

                  >

                    <FaXTwitter size={14} />

                  </a>

                </div>

              </div>
              <div className="mt-6 overflow-hidden rounded-xl border border-white/20">
                <LeafletMap />
              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="rounded-2xl bg-zinc-900 p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-zinc-400">First Name</label>
                    <input
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                      placeholder="Your First Name"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400">Last Name</label>
                    <input
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>

                {/* Company - Optional (No 'required' attribute) */}
                <div>
                  <label className="text-xs text-zinc-400">Company Name</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    placeholder="Company"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    placeholder="youremail@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400">Phone Number</label>
                  <input
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    placeholder="(+92) XXX-XX-XX-XX"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    placeholder="Got an idea? Let’s make it real"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-500 py-3 font-medium text-white hover:bg-blue-600 transition"
                >
                  {status || "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}