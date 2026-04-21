'use client'

import { useState } from "react";
import Container from "../../../components/common/container";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

type FormData = {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  website: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+92|0)?3[0-9]{9}$/;

    if (!formData.firstName.trim()) return "First name is required";
    if (!formData.lastName.trim()) return "Last name is required";
    if (!emailRegex.test(formData.email)) return "Enter a valid email";
    if (!phoneRegex.test(formData.phone)) return "Enter a valid Pakistani phone number";
    if (formData.message.trim().length < 10) return "Message must be at least 10 characters";

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      setStatus(error);
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-stretch">

            {/* LEFT SIDE */}
            <div className="rounded-2xl bg-gradient-to-b from-blue-500 to-blue-200 p-10 text-white shadow-xl">
              <h2 className="text-2xl font-semibold mb-8">Get in touch</h2>

              <div className="mb-6">
                <h3 className="font-semibold mb-1 text-base">Visit us</h3>
                <p className="text-base opacity-90 leading-relaxed">
                  Suite# 318 <br />
                  Mashriq Center <br />
                  Gulshan Block 14, Karachi, Pakistan
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-1 text-base">Chat to us</h3>
                <p className="text-base opacity-90">
                  Our friendly team is here to help.<br />
                  techmati@techmatically.com
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-1 text-base">Call us</h3>
                <p className="text-base opacity-90">
                  Mon–Fri from 8am to 5pm<br />
                  (+92) 321-3166393
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-base">Social media</h3>
                <div className="flex gap-3 text-white/90">

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                  >
                    <FaFacebookF size={18} />
                  </a>

                  <a
                    href="https://www.linkedin.com/company/techmatically/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                  >
                    <FaLinkedinIn size={18} />
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition"
                  >
                    <FaXTwitter size={18} />
                  </a>

                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-xl border border-white/20">
                <LeafletMap />
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="rounded-2xl bg-zinc-900 p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-zinc-400">First Name</label>
                    <input
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-400">Last Name</label>
                    <input
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-zinc-400">Company Name</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400">Phone Number</label>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                {/* Honeypot */}
                <input
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />

                <div>
                  <label className="text-xs text-zinc-400">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-lg bg-zinc-950 border border-zinc-800 px-4 py-3 text-sm outline-none focus:border-blue-500"
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